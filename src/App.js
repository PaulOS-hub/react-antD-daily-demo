import logo from './logo.svg';
import './App.css';
import ADesign from './components/demo'
import { createStore } from 'redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import FrontendAuth from './components/renderAuth'
import routerMap from './routerMap.js'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ADesign></ADesign>
      </header>
    </div>
  );
}

export default App;
