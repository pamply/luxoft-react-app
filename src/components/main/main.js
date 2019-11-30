import React from 'react'

export const Main = props => {
  if (props.history.location.state) {
    const { email } = props.history.location.state
    return <div>Hello {email}</div>
  } else {
    return <div>Please login in Login Page</div>
  }
}
