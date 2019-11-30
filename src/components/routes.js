/* eslint-disable react/no-children-prop */
import { RegisterForm } from "./register-form";
import { LoginForm } from "./login-form";
import { Main } from "./main";
import { NotFound } from "./not-found";
import { CoinsDashboard } from "./coins-dashboard";
import { Back } from "./back";
import React from "react";
import { Switch, Route } from "react-router-dom";

export const Routes = () => (
  <Switch>
    <Route children={props => <LoginForm {...props} />} exact path="/" />
    <Route
      children={props => <CoinsDashboard {...props} />}
      exact
      path="/coins"
    />
    <Route children={props => <Back {...props} />} exact path="/back" />
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
    <Route children={props => <Main {...props} />} exact path="/main" />
    <Route path="*">
      <NotFound />
    </Route>
  </Switch>
);
