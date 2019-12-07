/* eslint-disable react/no-children-prop */
import { NotFound } from './not-found'
import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom'

const LoginForm = lazy(() => import('./login-form'));
const RegisterForm = lazy(() => import('./register-form'));
const ResetPassword = lazy(() => import('./reset-password'));
const Main = lazy(() => import('./main'));
const About = lazy(() => import('./about'));

export const Routes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Route children={props => <LoginForm {...props} />} exact path="/" />
      <Route
        children={props => <RegisterForm {...props} />}
        exact
        path="/register"
      />
      <Route children={props => <About {...props} />} exact path="/about" />
      <Route children={props => <ResetPassword {...props} />} exact path="/reset" />
      <Route children={props => <Main {...props} />} exact path="/main" />
      <Route path="*"><NotFound /></Route>
    </Switch>
  </Suspense>
)
