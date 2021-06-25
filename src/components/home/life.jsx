import React, { Component } from 'react'
export default class LifeCycleDemo extends Component {

    constructor(props) {
        console.log("constructor")
        super(props)
        this.state = {
            count: 1
        }
    }
    add = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    minus = () => {
        this.setState({
            count: this.state.count - 1
        })
    }
    // 第一次接受props不调用
    // 只有后续新传入props时才会调用
    componentWillReceiveProps(props) {
        console.log(props)
        console.log("componentWillReceiveProps")
    }
    componentWillUpdate() {
        console.log("componentWillUpdate")

    }
    componentDidUpdate() {
        console.log("componentDidUpdate")

    }
    shouldComponentUpdate() {
        return true  //
    }
    componentWillMount() {
        console.log("componentWillMount")
    }
    componentDidMount() {
        console.log("componentDidMount")
    }
    render() {
        console.log("render")
        return (
            <div>
                <h1>
                    当前值：{ }
                </h1>
                <button onClick={this.add}>加1</button>
                <button onClick={this.minus}>减1</button>
            </div>
        )
    }

}