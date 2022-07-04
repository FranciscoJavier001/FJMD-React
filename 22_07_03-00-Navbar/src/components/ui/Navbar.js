import { BrowserRouter, NavLink } from "react-router-dom";
import React from 'react'

export const Navbar = () => {
  return (
    <BrowserRouter>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

        <NavLink
          className="navbar-brand"
          to="/"
        >
          Principal
        </NavLink>

        <div className="navbar-collapse col-1">
          <div className="navbar-nav">

            <NavLink
              to="/"
              className={({isActive}) => isActive ? 'nav-item active' : 'nav-item'}
            >Primero
            </NavLink>
          </div>
        </div>

      </nav>
    </BrowserRouter>
  )
}
