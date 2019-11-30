/* eslint-disable react/no-children-prop */
import { RegisterForm } from './register-form'
import { LoginForm } from './login-form'
import { Main } from './main'
import { NotFound } from './not-found'
import { About } from './about'
import { ResetPassword } from './reset-password'
import React from 'react'
import { Switch, Route } from 'react-router-dom'

export const Routes = () => (
  <Switch>
    <Route
      children={props => <LoginForm {...props} />}
      exact path="/"
    />
    <Route
      children={props => <RegisterForm {...props} />}
      exact
      path="/register"
    />
    <Route
      children={props => <About {...props} />}
      exact path="/about"
    />
    <Route
      children={props => <Main {...props} />}
      exact path="/main"
    />
    <Route
      children={props => <ResetPassword {...props} />}
      exact path="/reset"
    />
    <Route path="*"><NotFound /></Route>



  </Switch>
)
