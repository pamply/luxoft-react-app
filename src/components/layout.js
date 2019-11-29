import Logo from "../assets/logo.png";
import React from "react";
import {Routes} from "./routes";

const NavBar = props => {
    let isLoggedIn;

    try {
        const {email} = props.history.location.state;
        isLoggedIn = true
    } catch (e) {
        if (e instanceof TypeError) {
            isLoggedIn = false
        }
    }

    return (
        <nav
            className="navbar navbar-expand-lg navbar"
            style={{backgroundColor: "#243387"}}
        >
            <a className="navbar-brand" href="#">
                <img src={Logo} height="50" alt=""/>
            </a>
            <a href="/" className={isLoggedIn ? "" : "hidden"}>
              Log out
            </a>
        </nav>
    );
};

export const Layout = props => (

    <div className="container-fluid">
        <NavBar/>
        <div className="content bg-light">
            <div className="form-container">
                <Routes {...props} />
            </div>
        </div>
    </div>
);
