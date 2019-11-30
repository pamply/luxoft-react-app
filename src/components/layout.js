import Logo from '../assets/logo.png'
import React from 'react'
import { Routes } from './routes'
import { Navbar } from "./navbar";

import { withRouter } from 'react-router-dom';

const NavBar = withRouter(props => <Navbar {...props} />);

export const Layout = props => (
  <>
    <div className="container-fluid">
      <NavBar  {...props} />
      <div className="content bg-light">
        <div className="form-container">
          <Routes {...props} />
        </div>
      </div>
    </div>
  </>
)
