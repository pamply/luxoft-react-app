import React from 'react'

const NavBar = () => (
  <nav
    className="navbar navbar-expand-lg navbar"
    style={{ backgroundColor: '#243387' }}
  >

    <h1>ASDF</h1>

  </nav>
)

export const Main = props => {
  <NavBar />
  const { email } = props.history.location.state
  return <div>Hello {email}</div>
}
