import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.scss'
import { LayoutComponent } from './components/LayoutComponent'
import { BrowserRouter as Router } from 'react-router-dom'

const App = () => (
  <Router>
    <LayoutComponent />
  </Router>
)

ReactDOM.render(<App />, document.querySelector('#app'))
