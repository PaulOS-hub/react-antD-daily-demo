import React, { Component } from 'react'
import { Timeline } from 'antd';
/**
 * @BrowserRouter 路由器管理
 */
import { Link, BrowserRouter, Route } from 'react-router-dom'
import Nav1 from '../nav1'
import Nav2 from '../nav2'
export default class About extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                {/* 123 */}
                {/* <BrowserRouter>  
                    路由器管理应该包裹到index.jsx中包裹全局
                */} 
                    <Link to="/nav1">Go 1</Link>
                    <br />
                    <Link to="/nav2">Go 2</Link>
                {/* </BrowserRouter> */}
                <div>
                    这里是content
                    {/* <BrowserRouter> */}
                        <Route path="/nav1" component={Nav1} />
                        <Route path="/nav2" component={Nav2} />
                    {/* </BrowserRouter> */}
                </div>
            </div>
        )
    }
}