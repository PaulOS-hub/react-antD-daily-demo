import React, { Component, createRef } from 'react';
import { Checkbox, Button, Radio } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import axios from 'axios'
import PropTypes from 'prop-types'
import Pubsub from 'pubsub-js'
const CheckboxGroup = Checkbox.Group;
class List extends Component {
    myRef = createRef()
    state = {
        plainOptions: [],
        checkedList: [],
        indeterminate: false,
        checkAll: false,
        hover: false
    };
    // 对传参进行类型限制
    static propTypes = {
        updateList: PropTypes.func.isRequired,
        updateCheckedList: PropTypes.func.isRequired,
        todoList: PropTypes.array
    }
    onChange = checkedList => {
        this.setState({
            checkedList,
            indeterminate: !!checkedList.length && checkedList.length < this.state.plainOptions.length,
            checkAll: checkedList.length === this.state.plainOptions.length,
        });
        this.props.updateCheckedList(checkedList)
    };

    // componentWillReceiveProps(nextProps){
    //     this.setState({
    //         plainOptions: nextProps.todoList.map(item => {
    //             return item.text
    //         }),
    //         checkedList: nextProps.todoList.filter(item => {
    //             return item.checked === true
    //         }).map(item => {
    //             return item.text
    //         }),
    //     })
    // }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     if (prevState.plainOptions.length !== nextProps.todoList.length) {
    //         const { todoList } = nextProps
    //         return {
    //             plainOptions: todoList.map(item => { return item.text }),
    //             checkedList: todoList.filter(item => {
    //                 return item.checked === true
    //             }).map(item => {
    //                 return item.text
    //             })
    //         }
    //     } else {
    //         return null
    //     }

    // }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.plainOptions.length !== nextProps.todoList.length) {
            const { todoList } = nextProps
            return {
                plainOptions: todoList
            }
        } else {
            return null
        }

    }


    onCheckAllChange = e => {
        this.setState({
            checkedList: e.target.checked ? this.state.plainOptions : [],
            indeterminate: false,
            checkAll: e.target.checked,
        });
    };
    onChangeBox = item => {
        // this.setState({
        //     []
        // })
        item.checked = !item.checked
        const { plainOptions } = this.state
        this.setState({
            plainOptions
        }, () => {
            // console.log(this.state)
            this.props.updateList()
        })

    }
    toggleHover = (e) => {
        this.state.plainOptions.forEach(item => {
            if (item.text === e.target.innerText) {
                item.showBg = !item.showBg
            }
        })
        this.setState({
            plainOptions: this.state.plainOptions
        })
    }

    componentDidMount(){

        // axios.get("")
        Pubsub.publish("dingyue1","woshishei")

    }

    render() {
        const { checkedList, plainOptions, indeterminate, checkAll, hover } = this.state

        return (
            <div>
                <div style={{ marginTop: "20px" }}>
                    {/* <CheckboxGroup
                        options={plainOptions}
                        value={checkedList}
                        onChange={this.onChange}
                    >
                    </CheckboxGroup> */}
                    <div>
                        {plainOptions.map(item => {
                            return (
                                <label key={item.id} onMouseLeave={this.toggleHover} onMouseEnter={this.toggleHover}>
                                    <div style={{ margin: "15px 0", padding: "5px 2px", cursor: "pointer", backgroundColor: item.showBg ? "#ccc" : "", transition: ".5s" }}>
                                        <Checkbox checked={item.checked} onChange={() => { this.onChangeBox(item) }}>{item.text}</Checkbox>
                                        <span>
                                            {/* <Icon type="close" /> */}
                                            <Button style={{ float: 'right', display: item.showBg ? "inline-block" : "none" }} type="primary" shape="circle" icon={<SmileOutlined />} size="small" />
                                        </span>
                                    </div>
                                </label>
                            )
                        })}
                    </div>
                </div>

                <div style={{ borderBottom: '1px solid #E9E9E9', marginTop: "20px" }}>
                    <Checkbox
                        indeterminate={indeterminate}
                        onChange={this.onCheckAllChange}
                        checked={checkAll}
                    >
                        全选
                    </Checkbox>
                    <span>
                        已完成{checkedList.length}/ {plainOptions.length}
                    </span>
                </div>
            </div >

        );
    }
}

export default List;
