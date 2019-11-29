import {RegisterForm} from "./register-form";
import {LoginForm} from "./login-form";
import {Main} from "./main";
import {About} from "./about";
import React from "react";
import {ResetPassword} from "./reset-password";
import {Switch, Route} from "react-router-dom";

export const Routes = () => (
    <Switch>
        <Route children={props => <LoginForm {...props} />} exact path="/"/>
        <Route children={props => <Main {...props} />} exact path="/main"/>
        <Route children={props => <About {...props} />} exact path="/about"/>
        <Route children={props => <ResetPassword {...props} />} exact path="/reset-password"/>
        <Route
            children={props => <RegisterForm {...props} />}
            exact
            path="/register"
        />
    </Switch>
);
