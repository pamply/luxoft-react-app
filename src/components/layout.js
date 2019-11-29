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
    <div style={{ margin: "auto 3rem auto auto", color: '#FFFFFF' }}>
      <Link to='/'>Log out</Link>
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
