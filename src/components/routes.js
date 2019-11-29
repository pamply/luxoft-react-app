/* eslint-disable react/no-children-prop */
import { RegisterForm } from './register-form'
import { LoginComponent } from './login/LoginComponent.jsx'
import { Main } from './main'
import { NotFound } from './not-found'
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ResetPasswordComponent from '../components/login/ResetPasswordComponent.jsx'
import AboutComponent from './about/AboutComponent.jsx'

export const Routes = () => (
  <Switch>
    <Route children={props => <LoginComponent {...props} />} exact path="/" />
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
      children={props => <ResetPasswordComponent {...props} />}
      exact
      path="/reset"
    />
    <Route
      children={props => <AboutComponent {...props} />}
      exact
      path="/about"
    />
    <Route children={props => <Main {...props} />} exact path="/main" />
    <Route path="*"><NotFound /></Route>
  </Switch>
)
