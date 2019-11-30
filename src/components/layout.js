import Logo from '../assets/logo.png'
import Logout from '../assets/logout.png'
import React from 'react'
import { Routes } from './routes'
import { Link } from 'react-router-dom'
const NavBar = () => (
  <nav
    className="navbar navbar-expand-lg navbar"
    style={{ backgroundColor: '#243387' }}
  >
    <a className="navbar-brand" href="#">
      <img src={Logo} height="50" alt="" />
    </a>
    <div className="text-right">
      <Link className="navbar-brand" to='/'>
        <img src={Logout} height="50" alt="" />
      </Link>
    </div>
    <div className="text-right">
      <Link className="navbar-brand" to='/about'>
        About
      </Link>
    </div>


  </nav>
)

export const Layout = props => (
  <>
    <div className="container-fluid">
      <NavBar />
      <div className="content bg-light">
        <div className="form-container">
          <Routes {...props} />
        </div>
      </div>
    </div>
  </>
)
