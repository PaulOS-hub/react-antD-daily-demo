import React, { Component } from 'react';
import { Input } from 'antd'
import PubSub from 'pubsub-js'

class Header extends Component {
    state = {
        textValue: ""
    }
    getCtxValue = ({ target, keyCode }) => {
        if (keyCode === 13 && target.value.trim()) {
            this.props.transferValue(target.value)
            this.setState({
                textValue: ""
            })
        }
    }
    onChange = ({ target }) => {
        this.setState({
            textValue: target.value
        })
    }
    componentDidMount() {
        this.token = PubSub.subscribe("dingyue1", (msg, data) => {
            console.log(msg, data)
        })
    }
    componentWillUnmount() {
        PubSub.unsubscribe(this.token);
    }
    render() {
        console.log("renderL ")
        return (
            <div>
                <Input value={this.state.textValue} onChange={this.onChange} allowClear onPressEnter={this.getCtxValue} placeholder="输入信息，回车键确认" />
            </div>
        );
    }
}

export default Header;
