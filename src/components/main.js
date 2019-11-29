import React from 'react'
import { Link } from 'react-router-dom'

export const Main = props => {
  const { email } = props.history.location.state
  return <div>Hello {email}</div>
}
