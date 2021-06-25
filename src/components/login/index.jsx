import React, { Component } from 'react'
import './index.less'
import { Form, Input, Button, Checkbox } from 'antd';
import { withRouter } from 'react-router-dom'
import { Redirect } from "react-router-dom"; //重定向使用
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userInfo: {
                username: "",
                passWord: "",
                id: "i am user"
            },
            rediectToReferrer: false, // 是否重定向之前的界面
        }
    }
    onFinish(values) {
        let data = Object.assign({}, this.state.userInfo, values)
        this.setState({
            userInfo: data
        })
        console.log(this.state)
        sessionStorage.setItem("username", this.state.userInfo.username) // 存储本地、
        this.setState({
            rediectToReferrer: true,
        })
        let RedirectUrl = this.props.location.state
            ? this.props.location.state.from.pathname
            : "/";
        // 登陆成功之后的跳转
        this.props.history.push({
            pathname: "/home"
        });

    };

    onFinishFailed(errorInfo) {
        console.log('Failed:', errorInfo);
    };
    render() {
        return (
            <div className="login_form">
                <div className="login_form_content">
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={this.onFinish.bind(this)}
                        onFinishFailed={this.onFinishFailed.bind(this)}
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                Submit
        </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}
export default withRouter(Login)