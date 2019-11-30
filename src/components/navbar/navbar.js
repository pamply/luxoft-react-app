import Logo from '../../assets/logo.png'
import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'

export const NavBar = props => (
  <nav
    className="navbar navbar-expand-lg navbar"
    style={{ backgroundColor: '#243387' }}
  >
    <div className="w-100">
      <a className="navbar-brand" href="#">
        <img src={Logo} height="50" alt="" />
      </a>
      {(props.history.location.state) ?
        <Link to="/">
          <h6 className="logout-button-navbar mt-3 mr-3">Logout</h6>
        </Link>
        :
        (props.history.location.pathname !== '/') ?
          <Link to="/">
            <h6 className="logout-button-navbar mt-3 mr-3">Go to Login Page</h6>
          </Link>
          : null
      }
    </div>
  </nav>
)