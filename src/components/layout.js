import Logo from '../assets/logo.png'
import React, { Component } from 'react'
import { Routes } from './routes'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
  const { isLogged } = props
  return (
    <nav
      className="navbar navbar-expand-lg navbar"
      style={{ backgroundColor: '#243387' }}
    >
      <a className="navbar-brand" href="#">
        <img src={Logo} height="50" alt="" />
      </a>
      {
        isLogged &&
        <Link to="/" className="logout-button-container">
          <div className="logout-button" onClick={(params) => {
            props.setUserLoged(false)
          }}>
            Logout
          </div>
        </Link>
      }
    </nav>
  )
}

export default class layout extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLogged: false
    }
  }

  setUserLoged = (isLogged) => {
    this.setState({ isLogged })
  }

  render () {
    const { isLogged } = this.state
    console.log(this)
    return (
      <div className="container-fluid">
        <NavBar
          isLogged={isLogged}
          setUserLoged={this.setUserLoged.bind(this)}
        />
        <div className="content bg-light">
          <div className="form-container">
            <Routes {...this.props}
              setUserLoged={this.setUserLoged.bind(this)}
            />
          </div>
        </div>
      </div>
    )
  }
}
