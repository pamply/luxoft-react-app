import React from 'react'
import { Routes } from './routes'
import NavBarComponent from './layouts/NavBarComponent.jsx'

export const LayoutComponent = props => (
  <>
    <div className="container-fluid">
      <NavBarComponent />
      <div className="content bg-light">
        <div className="container">
          <Routes {...props} />
        </div>
      </div>
    </div>
  </>
)
