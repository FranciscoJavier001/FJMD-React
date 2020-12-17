// con rafc creamos otro funtional component esta funciom es un componente calido porque qcepta un solo argumento de objeto "props" que provienen de propiedqdes con datos y devuelve un elemento de react, llamamos a dichos componentes funcionales porque literalmente son funciones de javascript 
import React from 'react'
import { Link, NavLink } from 'react-router-dom' //Este es un componente comun y corriente que nos las hace SPA y asi trabaja

export const NavBar = () => {
    return (
        // Este es etiqueta HTML dstinada para hacer la navegacion
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

          <Link to="/" className="navbar-brand" href="#">useContext</Link>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink exact activeClassName="active" to="/" className="nav-item nav-link">Home</NavLink>
              <NavLink exact activeClassName="active" to="/about" className="nav-item nav-link">About</NavLink>
              <NavLink exact activeClassName="active" to="/login" className="nav-item nav-link">Login</NavLink>
            </div>
          </div>
      </nav>
    )
}