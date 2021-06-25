import React, { Component } from 'react'
import Child from './child'
import LifeCycleDemo from './life'
import TodoList from './TodoList'
import NewLifeCycleDemo from './newLife'
import './index.less'
export default class Home extends Component {
    // 直接赋值的情况，等于默认给Home组件实例默认state赋值了一个对象
    state = {
        arr: [1, 2, 3]
    }
    changeArr = () => {
        this.setState({
            arr: [1, 2]
        })
    }
    render() {

        return (
            <div className="content" style={{ margin: '200px auto' }}>
                {/* <Child ></Child>
                <button onClick={this.changeArr}>修改props</button>
                <NewLifeCycleDemo arr={this.state.arr} /> */}
                <TodoList />
            </div>
        )
    }
}