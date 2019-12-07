/* eslint-disable react/no-children-prop */
import React, { Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'

const LoginForm = lazy(() => import('./login-form'))
const RegisterForm = lazy(() => import('./register-form'));
const Main = lazy(() => import('./main'));
const NotFound = lazy(() => import('./not-found'));

export const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Suspense fallback={"loading..."}>
        <LoginForm />
      </Suspense>
    </Route>
    <Route exact path="/register">
      <Suspense fallback={"loading..."}>
        <RegisterForm />
      </Suspense>
    </Route>
    <Route exact path="/main">
      <Suspense fallback={"loading..."}>
        <Main />
      </Suspense>
    </Route>
    <Route exact path="*">
      <Suspense fallback={"loading..."}>
        <NotFound />
      </Suspense>
    </Route>
  </Switch>
)
