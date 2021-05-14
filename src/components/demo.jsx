import React, { Component } from 'react'
import { Button } from 'antd';
import PropTypes from 'prop-types'
import { savaForm, asyncMethod } from '../store/demo/action'
import { connect } from 'react-redux'
import store from '../store/store'

class ADesign extends Component {
    static propTypes = {
        savaForm: PropTypes.func,
        name: PropTypes.string
    }
    constructor(props) {
        super(props)
    }
    savedata() {
        this.props.savaForm({
            name: "wsnd",
            age: 123
        })
        console.log(store.getState())
    }
    asyncsavedata() {
        this.props.savaForm({
            name: "异步处理"
        })
        this.props.asyncMethod()
        console.log(store.getState())
    }
    render() {
        return (
            <div>
                <Button type="primary" onClick={this.savedata.bind(this)}>
                    213+ {this.props.savedData.name}
                </Button>
                <Button type="danger" onClick={this.asyncsavedata.bind(this)}>
                    213+ {this.props.savedData.name}
                </Button>
            </div>
        )
    }
}
export default connect(state => ({
    savedData: state.savedData // 映射：可以使用this.props获取state
}), {
    savaForm,  // 映射：可以用this.props调用方法。
    asyncMethod
})(ADesign)