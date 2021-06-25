import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'

export default class Child extends Component {
    // 直接赋值的情况，等于默认给Home组件实例默认state赋值了一个对象
    constructor(props) {
        super(props)
        // this.input1 = createRef()
        this.state = {
            isHot: true,
            username: "",
            password: "",
            opacity: 1
        }
    }
    // 组件props进行类型限制
    static propTypes = {
        reduceArr: PropTypes.array,
        // reduceArr: PropTypes.array.isRequired
    }
    static defaultProps = {
        reduceArr: [1, 2, 3, 4]
    }
    componentDidMount() {
        console.log(this.input1)
       
        // let
    }
    changWeather = () => {
        this.setState({
            isHot: !this.state.isHot
        }, () => {
            console.log(this.input1)
        })

    }
    handleSubmit = () => {
    }
    getUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    getPassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    getUserinfo = (event) => {
        event.preventDefault()
        console.log(this.state)
    }
    saveFormdata = (type, event) => {
        console.log(type, event.target.value)

    }
    tranDade = () => {
        setInterval(() => {
            let { opacity } = this.state
            opacity -= 0.1
            if (opacity <= 0) opacity = 1
            this.setState({
                opacity
            })
        }, 200);
    }

    // 生命周期 
    componentDidMount() {
        // timer挂在class的实例上
        this.timer = setInterval(() => {
            let { opacity } = this.state
            opacity -= 0.1
            if (opacity <= 0) opacity = 1
            this.setState({
                opacity
            })
        }, 200);
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }
    render() {
        const { reduceArr } = this.props
        let ctx = reduceArr.reduce((preValue, currentValue) => {
            return preValue + currentValue
        })
        let arr = {
            name: "1", age: 20, obj: {
                gender: "girl"
            }
        }
        let arr2 = { ...arr }
        arr2.name = "2"
        arr2.obj.gender = "boy"
        // console.log(arr)
        // console.log(arr2)

        return (
            <div>
                <form action="#" onSubmit={this.handleSubmit}>
                    <input onChange={(event) => { this.saveFormdata("username", event) }} type="text" name="username" />
                    <input onChange={(event) => { this.saveFormdata("password", event) }} type="password" name="password" />
                    <button onClick={this.getUserinfo}>登录</button>
                </form>

                <h1 style={{ opacity: this.state.opacity }}>React真难</h1>
                <button onClick={this.tranDade}>开始渐变</button>
                {/* <h1 onClick={this.changWeather}>
                    今天天气很{this.state.isHot ? '热' : "冷"}
                </h1>
                {ctx}
                <input type="text" />
                <input type="text" ref={(input) => {
                    this.input = input
                    console.log(input)
                }} />
                {name} */}
            </div>
        )
    }
}
// Child.propTypes = {
//     reduceArr: PropTypes.string
// }