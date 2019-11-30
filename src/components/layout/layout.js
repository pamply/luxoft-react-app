import React from 'react'
import { Routes } from '../routes/routes'
import { RoutesNavbar } from '../routes/routes_navbar'

export const Layout = props => (
  <>
    <div className="container-fluid">
      <RoutesNavbar {...props} />
      <div className="content bg-light">
        <div className="form-container">
          <Routes {...props} />
        </div>
      </div>
    </div>
  </>
)
