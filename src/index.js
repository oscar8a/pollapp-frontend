import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'

// const initialState = {
//   polls: [],
//   isAuthenticated: false,
//   isAuthenticating: false,
//   currentUser: {},
//   token: null,
//   errors: []
// }

const store = createStore(rootReducer, applyMiddleware(thunk))

console.log(store.getState())

ReactDOM.render(<Router><Provider store={store}><App /></Provider></Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
