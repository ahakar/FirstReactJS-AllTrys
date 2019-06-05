import React, {Component} from 'react';
import { Route  } from 'react-router';
import { BrowserRouter, Switch, HashRouter } from 'react-router-dom';
import App from './Example-001/App';
import Application from './Example-002/Application.js';
import Form from './Example-003/Form.js';
import Parent from './Example-004/Parent.js';
import Login from './Example-005/Login';
import LoginForm from './Example-006/LoginForm.js';
import LifeCycle from './LifeCycle';
import Home from './Home';


export default class Routes extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path='/' component={LifeCycle} />
                    <Route exact path='/home' component={Home} />
                    <Route exact path='/login' component={LoginForm} />
                </Switch>
            </HashRouter>
        );
    }
}
