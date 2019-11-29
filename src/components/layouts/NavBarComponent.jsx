import Logo from '../../assets/logo.png'
import React from 'react'

const NavBarComponent = () => (
  <>
    <nav
      className="navbar navbar-expand-lg navbar"
      style={{ backgroundColor: '#243387' }}
    >
      <a className="navbar-brand" href="/">
        <img src={Logo} height="50" alt="" />
      </a>

      <div className=" navbar-collapse" id="">
        <ul className="navbar-nav pull-right">
          <li className="nav-item pull-right">
            <a className="nav-link pull-right" href="/about" tabIndex="-1" >About</a>
          </li>
          <li className="nav-item pull-right">
            <a className="nav-link pull-right" href="/" tabIndex="-1" >Logout</a>
          </li>
        </ul>

      </div>
    </nav>

  </>
)

export default NavBarComponent
