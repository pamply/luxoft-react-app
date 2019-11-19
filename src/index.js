import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

const App = () => (
    <div className="alert alert-primary" role="alert">Hello world, React Bootcamp</div>
)

ReactDOM.render(<App />, document.querySelector("#app"));
