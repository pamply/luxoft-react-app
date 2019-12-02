/* eslint-disable react/no-children-prop */
import { RegisterForm } from '../register-form/register-form'
import { LoginForm } from '../login-form/login-form'
import { Main } from '../main/main'
import { NotFound } from '../not-found/not-found'
import { NavBar } from '../navbar/navbar'
import React from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'

export const Routes = () => {
  const location = useLocation();
  return (
    <>
      <NavBar {...location} />
      <div className="content bg-light login-background">
        <div className="form-container">
          <Switch>
            <Route children={props => <LoginForm {...props} />} exact path="/" />
            <Route
              children={props => <RegisterForm {...props} />}
              exact
              path="/register"
            />
            <Route
              children={props => <LoginForm {...props} />}
              exact
              path="/resetPassword"
            />
            <Route children={props => <Main {...props} />} exact path="/main" />
            <Route path="*"><NotFound /></Route>
          </Switch>
        </div>
      </div>
    </>

  )
}
