import Logo from '../assets/logo.png'
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
    <div class="container">
      <Link to='/about'>About</Link>
      <Link to='/'>Logout</Link>
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
