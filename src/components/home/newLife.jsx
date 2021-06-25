import React, { Component, createRef } from 'react'
import './index.less'
export default class NewLifeCycleDemo extends Component {

    constructor(props) {
        console.log("constructor")
        super(props)
        this.list = createRef()
        this.state = {
            count: 1,
            newsArr: []
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
    // UNSAFE_componentWillReceiveProps(props) {
    //     console.log(props)
    //     console.log("componentWillReceiveProps")
    // }
    // componentWillUpdate() {
    //     console.log("componentWillUpdate")

    // }

    /**
     * 当state的值任何时候都取决于props，就可以用这个生命周期。
     * @param {*} props  传入的props值
     * @param {*} state   原始的state值
     * @returns 
     */
    static getDerivedStateFromProps(props, state) {
        // props.arr = [] props 只读

        console.log(props, state)
        console.log("getDerivedStateFromProps")
        return {

        }   // null 或 状态对象 => this.state , 若返回的值初始state中存在，则无法再修改state的值UI不更新
    }



    shouldComponentUpdate() {
        return true  //
    }
    // componentWillMount() {
    //     console.log("componentWillMount")
    // }

    // 页面即将输出真实dom时，进行一些操作
    // 组件更新之前来个快照 getSnapshotBeforeUpdate 中读取到的 DOM 元素状态是可以保证与componentDidUpdate 中一致的。
    // 如需要以特殊方式处理滚动位置的聊天线程 应返回 snapshot 的值（或 null）
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate")
        return this.list.current.scrollHeight // 此hook返回值都将作为参数传给componentDidupdate
    }

    componentDidUpdate(preProps, preState, value) {
        console.log("componentDidUpdate")
        this.list.current.scrollTop += this.list.current.scrollHeight - value
    }
    componentDidMount() {
        setInterval(() => {
            const { newsArr } = this.state
            const news = '新闻' + (newsArr.length + 1)
            this.setState({
                newsArr: [news, ...newsArr]
            })
        }, 1000);
    }

    render() {
        console.log("render")
        return (
            <div>
                {/* <h1>
                    当前值：{ }
                </h1>
                <button onClick={this.add}>加1</button>
                <button onClick={this.minus}>减1</button> */}
                <ul className="list" ref={this.list}>
                    {this.state.newsArr.map(item => {
                        return <li className="list_" key={item}>{item}</li>
                    })}
                </ul>
            </div>
        )
    }

}