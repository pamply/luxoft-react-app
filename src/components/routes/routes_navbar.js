/* eslint-disable react/no-children-prop */
import { NavBar } from '../navbar/navbar'
import React from 'react'
import { Switch, Route } from 'react-router-dom'

export const RoutesNavbar = () => (
  <Switch>
    <Route children={props => <NavBar {...props} />} exact path="/" />
    <Route children={props => <NavBar {...props} />} exact path="/register" />
    <Route children={props => <NavBar {...props} />} exact path="/main" />
  </Switch>
)