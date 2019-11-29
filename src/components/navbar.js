import {LogStatusContext} from "./Contexts/LogStatusContext";
import Logo from "../assets/logo.png";
import React from "react";
import {Link} from "react-router-dom";

export const NavBar = () => (
    <LogStatusContext.Consumer>
        {({status, toggleLogStatus}) => (
            <nav className="navbar navbar-expand-lg justify-content-between">
                <Link className="navbar-brand" to="/">
                    <img src={Logo} height="50" alt=""/>
                </Link>
                <Link to="/about" className="navbar-btn">
                    About
                </Link>
                <Link onClick={toggleLogStatus}
                   to="/" className={`navbar-btn log-out ${status ? "" : "hidden"}`}>
                    Log out
                </Link>
            </nav>
        )}
    </LogStatusContext.Consumer>
);
