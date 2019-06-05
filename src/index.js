/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './Example-001/App';
import Application from './Example-002/Application.js';
import Form from './Example-003/Form.js';
import Parent from './Example-004/Parent.js';
import Login from './Example-005/Login';
import LoginForm from './Example-006/LoginForm.js';
import Routes from './Routes.js';

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Application />, document.getElementById('root'));
//// ReactDOM.render(<Parent />, document.getElementById('root'));
// ReactDOM.render(<Login />, document.getElementById('root'));
ReactDOM.render(<Routes />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();*/


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers/index';
import logger from "redux-logger";
import thunk from 'redux-thunk';
import Routes from './Routes.js';

const middleware = applyMiddleware(logger, thunk);

const createStoreWithMiddleware = (createStore(reducers, middleware));

ReactDOM.render(
<Provider store={createStoreWithMiddleware}>
<Routes />
</Provider>
, document.getElementById('root'));
