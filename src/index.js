import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

const App = () => (
  <div class="container">
    <div class="row">
      <div class="col-sm">One of three columns</div>
      <div class="col-sm">One of three columns</div>
      <div class="col-sm">One of three columns</div>
    </div>
  </div>
);

ReactDOM.render(<App />, document.querySelector("#app"));
