import React from 'react'
import { Route, Redirect } from 'react-router-dom'
export default class FrontendAuth extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        /**
         * @param routerConfig => routerMap配置的路由表
         * @param location => 当前页路由信息
         */
        const { routerConfig, location } = this.props
        const { pathname } = location
        const isLogin = sessionStorage.getItem("username");
        console.log(pathname, isLogin, routerConfig);
        console.log(location);
        const targetRouterConfig = routerConfig.find(
            item => item.path === pathname
        )
        /**
         * @param targetRouterConfig => 匹配到的路由信息
         */
        console.log(targetRouterConfig, "targetRouterConfig")
        if (targetRouterConfig && !targetRouterConfig.auth && !isLogin) {
            const { component } = targetRouterConfig
            return <Route exact path={pathname} style={{ flex: 1 }} component={component} />;
        }
        if (isLogin) {
            // 如果是登陆状态，想要跳转到登陆，重定向到主页
            if (pathname === "/login") {
                return <Redirect to="/" />;
            } else {
                // 如果路由合法，就跳转到相应的路由
                if (targetRouterConfig) {
                    return (
                        <Route style={{ flex: 1 }} path={pathname} component={targetRouterConfig.component} />
                    );
                } else {
                    // 如果路由不合法，重定向到 404 页面
                    return <Redirect style={{ flex: 1 }} to="/404" />;
                }
            }
        } else {
            // 非登陆状态下，当路由合法时且需要权限校验时，跳转到登陆页面，要求登陆
            if (targetRouterConfig && targetRouterConfig.auth) {
                return <Redirect style={{ flex: 1 }} to="/login" />;
            } else {
                // 非登陆状态下，路由不合法时，重定向至 404
                return <Redirect style={{ flex: 1 }} to="/404" />;
            }
        }
    }
}