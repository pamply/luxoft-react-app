import Logo from "../assets/logo.png";
import React from "react";

export const NavBar = props => {
    console.log(props);
    return (
        <nav
            className="navbar navbar-expand-lg navbar"
            style={{backgroundColor: "#243387"}}
        >
            <a className="navbar-brand" href="#">
                <img src={Logo} height="50" alt=""/>
            </a>
        </nav>

    )

};
