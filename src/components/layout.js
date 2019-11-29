import React from "react";
import {Routes} from "./routes";
import { NavBar } from "./Contexts/navbar";
import {LogProvider} from "./Contexts/LogStatusContext";

export const Layout = () => (

    <div className="container-fluid">
        <LogProvider>
            <NavBar />
            <div className="content bg-light">
                <div className="form-container">
                    <Routes />
                </div>
            </div>
        </LogProvider>
    </div>
);
