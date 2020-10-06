import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Home from "./Home";
import Postings from "./Postings";
import Info from "./Info";
import Login from "./Login";
import About from "./About";
import Register from "./Register";
import Account from "./Account";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Postings" exact component={Postings} />
                    <Route path="/Info" exact component={Info} />
                    <Route path="/Login" exact component={Login} />
                    <Route path="/Register" exact component={Register} />
                    <Route path="/Account" exact component={Account} />
                    <Route path="/About" exact component={About} />

                </Switch>
            </Router>
        )
    }
}
