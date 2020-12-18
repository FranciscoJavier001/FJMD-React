// con rafc creamos otro funtional component esta funciom es un componente calido porque qcepta un solo argumento de objeto "props" que provienen de propiedqdes con datos y devuelve un elemento de react, llamamos a dichos componentes funcionales porque literalmente son funciones de javascript 
//** NavLink puede establecer una clase si coincide con el Path (ruta) */
import React from 'react'
import { Link, NavLink } from 'react-router-dom' //Este es un componente comun y corriente que nos las hace SPA y asi trabaja, hablando del Link

export const NavBar = () => {
    return (
        // Este es etiqueta HTML dstinada para hacer la navegacion
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

          {/* Esta es para poner el titulo el cual es el primero y me redirecciona */}
          <Link to="/" className="navbar-brand">useContext</Link>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {/* NavLink me permite poner clases, como el active que me permite que se ponga en color blanco donde estoy */}
              <NavLink exact activeClassName="active" to="/" className="nav-item nav-link">Home</NavLink> 
              <NavLink exact activeClassName="active" to="/about" className="nav-item nav-link">About</NavLink>
              <NavLink exact activeClassName="active" to="/login" className="nav-item nav-link">Login</NavLink>
            </div>
          </div>
      </nav>
    )
}