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
                    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                    <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                    <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                    <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
                </Timeline>
                this is HOME
            </div>
        )
    }
}