/* eslint-disable react/no-children-prop */
import { RegisterForm } from './register-form'
import { Main } from './main'
import { NotFound } from './not-found'
import React from 'react'
import { Switch, Route } from 'react-router-dom'

const Loading = () => (
  <h1>Loading ...</h1>
)

const ChargeLogin = React.lazy(() => import('./login-form'));

export const Routes = () => (
  <Switch>
    <Route children={(props) => {
      return <React.Suspense fallback={<Loading />}><ChargeLogin /></React.Suspense>
    }} exact path='/' />
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
