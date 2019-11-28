import { RegisterForm } from "./register-form";
import { LoginForm } from "./login-form";
import { Main } from "./main";
import React from "react";
import { Switch, Route } from "react-router-dom";
import { ResetPassword } from "./resetpassword-form";
import { SecretSanta } from './secret-santa'

export const Routes = () => (
  <Switch>
    <Route children={props => <LoginForm {...props} />} exact path="/" />
    <Route
      children={props => <RegisterForm {...props} />}
      exact
      path="/register"
    />
    <Route
      children={props => <RegisterForm {...props} />}
      exact
      path="/register"
    />
    <Route
      children={props => <ResetPassword {...props} />}
      exact
      path="/reset"
    />
    <Route
      children={props => <SecretSanta {...props} />}
      exact
      path="/secret-santa"
    />
    <Route children={props => <Main {...props} />} exact path="/main" />
  </Switch>
);
