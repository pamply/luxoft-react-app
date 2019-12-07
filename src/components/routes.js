/* eslint-disable react/no-children-prop */
import React, { Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'

const RegisterForm = lazy(() => import('./register-form'));
const Main = lazy(() => import('./main'));
const NotFound = lazy(() => import('./not-found'));
const LoginForm = lazy(() => import('./login-form'));

export const Routes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Route component={LoginForm} exact path="/" />
      <Route
        component={RegisterForm} exact
        path="/register"
      />
      <Route component={Main} exact path="/main" />
      <Route component={NotFound} path="*" />
    </Switch>
  </Suspense>
)
