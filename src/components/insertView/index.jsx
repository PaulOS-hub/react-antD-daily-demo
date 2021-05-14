import React, { Component } from 'react'
import { Timeline } from 'antd';
export default class Home extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Timeline>
                    <Timeline.Item>子路由</Timeline.Item>
                </Timeline>
                123
                this is 子路由
            </div>
        )
    }
}