import { BrowserRouter, Navigate } from "react-router-dom"; //** Para poder usar  */
import { Routes, Route, NavLink } from "react-router-dom"; //** Documentacion de RRD */

import logo from "../logo.svg"; //** Importamos el Logo de este proyecto de React */

export const Navigation = () => { //** Para poderla usar en el App.tsx */
  return ( //** Lo que vamos a retornar */
    <BrowserRouter> {/* Documentacion del RRD */}
      <div className="main-layout"> {/* Esta clase ya la tenemos definida en el index.css */}
        <nav> {/* La barra de navegacion de lado izquierdo */}
          <img src={logo} alt="React Logo" /> {/* Importo la imagen del logo */}
          <ul> {/* Una lista desordenada */}
            <li> {/* Elementos de lista */}
            {/* Elemento del RRD, path, estilos, isActive(valor booleano), si esta en true regresala o si no nada */}
              <NavLink to="/home" className={ ({ isActive }) => isActive ? 'nav-active' : ''}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={ ({ isActive }) => isActive ? 'nav-active' : ''}>About</NavLink>
            </li>
            <li>
              <NavLink to="/users" className={ ({ isActive }) => isActive ? 'nav-active' : ''}>Users</NavLink>
            </li>
          </ul>
        </nav>

        <Routes> {/* Rutas de RRD */}
          <Route path="about" element={ <h1>About Page</h1> } /> {/* Rutass con path y elemento a renderizar */}
          <Route path="users" element={ <h1>Users Page</h1> } />
          <Route path="home" element={ <h1>Home Page</h1> } />

          <Route path="/*" element={ <Navigate to="/home" replace /> } /> {/* Comodin para todo */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};
