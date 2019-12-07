import React from 'react'

const Main = props => {
  const { email } = props.history.location.state
  return <div>Hello {email}</div>
}
export default Main;