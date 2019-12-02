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
      {(props.state) ?
        <Link to="/">
          <h6 className="logout-button-navbar mt-3 mr-3">Logout</h6>
        </Link>
        :
        (props.pathname !== '/' && props.pathname !== '/resetPassword') ?
          <Link to="/">
            <h6 className="logout-button-navbar mt-3 mr-3">Login Page</h6>
          </Link>
          : null
      }
    </div>
  </nav>
);