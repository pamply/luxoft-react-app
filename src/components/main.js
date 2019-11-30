import React from 'react'
import { Navbar } from './navbar'

export const Main = props => {

  const { email } = props.history.location.state

  return (
    <div>
      <Navbar />
      <div>Hello {email}</div>
    </div>
  );
}
