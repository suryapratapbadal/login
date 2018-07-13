import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import userReducer from './reducer';
import thunk from 'redux-thunk';

const store = createStore(userReducer,  compose(applyMiddleware(thunk)));
// const store = createStore(userReducer);

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
