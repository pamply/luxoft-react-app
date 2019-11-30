/* eslint-disable react/no-children-prop */
import { RegisterForm } from './register-form/register-form'
import { LoginForm } from './login-form/login-form'
import { Main } from './main'
import { NotFound } from './not-found'
import React from 'react'
import { Switch, Route } from 'react-router-dom'

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
    <Route children={props => <Main {...props} />} exact path="/main" />
    <Route path="*"><NotFound /></Route>
  </Switch>
)
