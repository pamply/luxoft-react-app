/* eslint-disable react/no-children-prop */
import { RegisterForm } from './register-form'
import { ResetPassword } from './reset-password'
import { LoginForm } from './login-form'
import { Main } from './main'
import { NotFound } from './not-found'
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { About } from './about'

export const Routes = () => (
  <Switch>
    <Route children={props => <LoginForm {...props} />} exact path="/" />
    <Route
      children={props => <RegisterForm {...props} />}
      exact
      path="/register"
    />
    <Route children={props => <Main {...props} />} exact path="/main" />
    <Route children={props => <ResetPassword {...props} />} exact path="/reset-password" />
    <Route
      component={About}
      exact
      path="/about"
    />
    <Route path="*"><NotFound /></Route>
  </Switch>
)
