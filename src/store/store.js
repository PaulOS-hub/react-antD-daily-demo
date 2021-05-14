import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as demo from './demo/reducer';
import thunk from 'redux-thunk'
let store = createStore(
    combineReducers({ ...demo }),
    applyMiddleware(thunk)
);
export default store;