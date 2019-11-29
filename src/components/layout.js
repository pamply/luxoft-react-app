import Logo from '../assets/logo.png'
import React from 'react'
import { Routes } from './routes'
import { Link } from 'react-router-dom';
const NavBar = () => (
  <nav
    className="navbar navbar-expand-lg navbar"
    style={{ backgroundColor: '#243387', color: "#FFFFFF" }}
  >
    <a className="navbar-brand" href="#">
      <img src={Logo} height="50" alt="" />
    </a>
    <div className="collapse navbar-collapse pull-right" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        {(
          window.location.href.includes("main")) ? (<li className="nav-item ">
            <Link to={'/'}>Logout</Link>
          </li>) : ''
          <li className="nav-item ">
            <Link to={'/'}>Logout</Link>
          </li>
        }
        <li className="nav-item " style={{ marginLeft: "15px" }}>
          <Link to={'/secret-santa'}> Secret Santa</Link>
        </li>
      </ul>
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
