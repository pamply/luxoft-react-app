import { RegisterForm } from "./register-form";
import { LoginForm } from "./login-form";
import { Main } from "./main";
import React from "react";
import { Switch, Route } from "react-router-dom";

export const Routes = () => (
  <Switch>
    <Route children={props => <LoginForm {...props} />} exact path="/" />
    <Route
      children={props => <RegisterForm {...props} />}
      exact
      path="/register"
    />
    <Route children={props => <Main {...props} />} exact path="/main" />
  </Switch>
);
