import asyncComponent from './utils/asyncComponent'
const Home = asyncComponent(() => import("./components/home"))
const About = asyncComponent(() => import("./components/about"))
const Index = asyncComponent(() => import("./App.js"))
const Login = asyncComponent(() => import("./components/login"))
const InsertView = asyncComponent(() => import("./components/insertView"))
const ErrorPage = asyncComponent(() => import("./components/404"))
export default [
    { path: "/", name: 'Home', component: Home, auth: true },
    { path: "/home", name: 'Home', component: Home, auth: true },
    { path: "/login", name: 'login', component: Login, auth: false },
    { path: "/about", name: 'About', component: About, auth: true },
    { path: "/about/insert", name: 'InsertView', component: InsertView, auth: true },
    { path: "/404", name: 'ErrorPage', component: ErrorPage, auth: false }
]