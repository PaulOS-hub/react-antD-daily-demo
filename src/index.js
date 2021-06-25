import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import 'lib-flexible'
import { Provider } from 'react-redux'
import store from './store/store'
import route from './router'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import FrontendAuth from './components/renderAuth'
import routerMap from './routerMap.js'
import Layout from './components/layout'
const render = Component => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        {/* <Component /> */}
        <Router>
          <div className="box-content" style={{ display: 'flex' }}>
            {/* <Layout /> */}
            <Switch >
              <FrontendAuth routerConfig={routerMap} />
            </Switch>
          </div>
        </Router>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
render()
