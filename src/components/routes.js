/* eslint-disable react/no-children-prop */
import { NotFound } from './not-found'
import React from 'react'
import { Switch, Route } from 'react-router-dom'

const Loading = () => (
  <h1>Loading ...</h1>
)

const ChargeLogin = React.lazy(() => import('./login-form'));
const ChargeRegister = React.lazy(() => import('./register-form'));
const ChargeMain = React.lazy(() => import('./main'));

export const Routes = () => (
  <Switch>
    <Route children={(props) => {
      return <React.Suspense fallback={<Loading />}><ChargeLogin {...props} /></React.Suspense>
    }} exact path='/' />
    <Route children={(props) => {
      return <React.Suspense fallback={<Loading />}><ChargeRegister {...props} /></React.Suspense>
    }} exact path='/register' />
    <Route children={(props) => {
      return <React.Suspense fallback={<Loading />}><ChargeMain {...props} /></React.Suspense>
    }} exact path='/main' />
    <Route path="*"><NotFound /></Route>
  </Switch>
)
