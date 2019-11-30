import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';

export const Navbar = props => {
  console.log(props.history.location.pathname);

  return (
    <nav
      className="navbar navbar-expand-lg navbar"
      style={{ backgroundColor: "#243387" }}
    >
      <Link className="navbar-brand" to="/">
        <img src={Logo} height="50" alt="" />
      </Link>
      <Link className="nav-link" to="about">About</Link>
      {props.history.location.pathname === "/main" &&
        <Link
          to="/"
          className="btn btn-danger"
        >
          Log Out
        </Link>
      }
    </nav>
  )
};