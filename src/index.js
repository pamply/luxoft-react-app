import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import Logo from "./assets/logo.png";

const NavBar = () => (
  <nav
    className="navbar navbar-expand-lg navbar"
    style={{ backgroundColor: "#243387" }}
  >
    <a className="navbar-brand" href="#">
      <img src={Logo} height="50" alt="" />
    </a>
  </nav>
);
const App = () => (
  <>
    <div className="container-fluid">
      <NavBar />
      <div className="content bg-light">
        <div class="jumbotron bg-light">
          <h1 class="display-4">Hello, world!</h1>
        </div>
      </div>
    </div>
  </>
);

ReactDOM.render(<App />, document.querySelector("#app"));
