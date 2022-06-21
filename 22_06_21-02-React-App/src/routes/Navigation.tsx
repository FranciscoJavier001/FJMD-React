import { BrowserRouter, Navigate } from "react-router-dom"; //** Para poder usar  */
import { Routes, Route, NavLink } from "react-router-dom"; //** Documentacion de RRD */

import logo from "../logo.svg"; //** Importamos el Logo de este proyecto de React */

import { LazyPage1, LazyPage2, LazyPage3} from '../01-lazyload/pages/'; //** Creo un archivo con las importaciones y solo importo carpeta */

export const Navigation = () => { //** Para poderla usar en el App.tsx */
  return ( //** Lo que vamos a retornar */
    <BrowserRouter> {/* Documentacion del RRD */}
      <div className="main-layout"> {/* Esta clase ya la tenemos definida en el index.css */}
        <nav> {/* La barra de navegacion de lado izquierdo */}
          <img src={logo} alt="React Logo" /> {/* Importo la imagen del logo */}
          <ul> {/* Una lista desordenada */}
            <li> {/* Elementos de lista */}
            {/* Elemento del RRD, path, estilos, isActive(valor booleano), si esta en true regresala o si no nada */}
              <NavLink to="/lazy1" className={ ({ isActive }) => isActive ? 'nav-active' : ''}>Lazy 1</NavLink>
            </li>
            <li>
              <NavLink to="/lazy2" className={ ({ isActive }) => isActive ? 'nav-active' : ''}>Lazy 2</NavLink>
            </li>
            <li>
              <NavLink to="/lazy3" className={ ({ isActive }) => isActive ? 'nav-active' : ''}>Lazy 3</NavLink>
            </li>
          </ul>
        </nav>

        <Routes> {/* Rutas de RRD */}
          <Route path="lazy1" element={ <LazyPage1 /> } /> {/* Rutass con path y elemento a renderizar */}
          <Route path="lazy2" element={ <LazyPage2 /> } />
          <Route path="lazy3" element={ <LazyPage3 /> } />

          <Route path="/*" element={ <Navigate to="/lazy1" replace /> } /> {/* Comodin para todo */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};
