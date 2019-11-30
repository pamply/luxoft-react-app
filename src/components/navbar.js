import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logout from '../assets/logout.png'

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar"
          style={{ backgroundColor: '#86B2EB' }}
        >
          <div className="navbar-brand">
            <Link to='/about'>
              About
            </Link>
          </div>
          <div className="navbar-nav ml-auto">
            <Link to='/'>
              <img src={Logout} height="50" alt="" />
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}
