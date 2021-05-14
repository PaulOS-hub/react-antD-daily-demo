import React, { Component } from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import asyncComponent from '../utils/asyncComponent'
const Home = asyncComponent(() => import("../components/home"))
const About = asyncComponent(() => import("../components/about"))
const Index = asyncComponent(() => import("../App.js"))
const InsertView = asyncComponent(() => import("../components/insertView"))

export default class RouteConfig extends Component {

    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/" exact component={Index}></Route>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/about" component={() =>
                        <About>
                            <Route exact path="/about" component={(props) => (< About {...props} />)}></Route>
                            <Route exact path="/about/insert" component={(props) => (< InsertView {...props} />)}></Route>
                        </About>
                    }>
                    </Route>
                    <Redirect to="/" />
                </Switch>
            </HashRouter >
        )
    }

}