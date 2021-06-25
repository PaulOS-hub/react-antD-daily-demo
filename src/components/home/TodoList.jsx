import React, { Component } from 'react'
import { nanoid } from 'nanoid';
import Header from './Header'
import List from './List'
export default class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todoList: [{
                id: nanoid(),
                text: "吃饭",
                checked: true,
                showBg: false,
            }, {
                id: nanoid(),
                text: "睡觉",
                checked: false,
                showBg: false,

            }, {
                id: nanoid(),
                text: "打游戏",
                checked: false,
                showBg: false,

            }]
        }
    }
    updateList = ()=>{
        console.log(this.state)
    }
    transferValue = (data) => {
        const obj = {
            id: nanoid(),
            text: data,
            checked: false
        }
        this.setState({
            todoList: [obj, ...this.state.todoList]
        })
    }
    updateCheckedList = (data) => {
        console.log(data)
    }
    render() {
        const { todoList } = this.state
        return (
            <div>
                <Header transferValue={this.transferValue} />
                <List updateList={this.updateList} updateCheckedList={this.updateCheckedList} todoList={todoList} />
            </div>
        )
    }
}