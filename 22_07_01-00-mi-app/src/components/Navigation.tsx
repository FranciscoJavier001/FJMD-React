import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">
          NavbarApp
        </NavLink>

        <div>
          <div className="navbar">
            <div className="dropdown">
              <button className="dropbtn">
                XXX
                <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </BrowserRouter>
  );
}
