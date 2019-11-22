import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import { Layout } from "./components/layout";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => (
  <Router>
    <Layout />
  </Router>
);

ReactDOM.render(<App />, document.querySelector("#app"));
