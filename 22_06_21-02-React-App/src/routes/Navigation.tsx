import { Suspense } from "react"; //** Exportamos el suspense para poder utilizarlo */
import { BrowserRouter } from "react-router-dom"; //** Para poder usar  */
import { Routes, Route, NavLink, Navigate } from "react-router-dom"; //** Documentacion de RRD */
import { routes } from "./routes"; //** Aqui tengo definido los LazyPage's */

import logo from "../logo.svg"; //** Importamos el Logo de este proyecto de React */

export const Navigation = () => { //** Para poderla usar en el App.tsx */
  return ( //** Lo que vamos a retornar */

  //** Suspense-Mostramos un componente de pantalla para decirle que espere */
  <Suspense fallback={ <span>Loading</span> }> {/* Necesario en suspense-(Recuerda como cerar) */}

    <BrowserRouter> {/* Documentacion del RRD */}

      <div className="main-layout"> {/* Esta clase ya la tenemos definida en el index.css */}
        <nav> {/* La barra de navegacion de lado izquierdo */}
          <img src={logo} alt="React Logo" /> {/* Imagen que tebemos arriba lado izquierdo */}
          <ul> {/* Una lista desordenada */}
            {
            routes.map(({ to, name }) => ( //** Voy a mapear las rutas que ya tengo definidas, desestructuro las que necesito */
              <li key={to}> {/* Elementos de lista, la llave es el parametro to, debe ser unica */}

                <NavLink /* Elemento del RRD, path, estilos, isActive(valor booleano), si esta en true regresala o si no nada */
                  to={to}
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  {name} {/* Necesitaba el name, que desestructure arriba, lo tego como name en routes.ts */}
                </NavLink>

              </li>
            ))}
          </ul>
        </nav>

        <Routes> {/* Rutas de RRD */}
          {
          routes.map( ({ path, Component }) => ( //** Rutas mapeadas, con desestructuracion de sus elementos */
            <Route //** Pantalla con informacion de cada elemento */
              key={ path } //** Su llave unica */
              path={ path } //** Su ruta */
              element={< Component />} //** Componente que renderizo */
            /> 
          ))
          }

          <Route path="/*" element={<Navigate to={ routes[0].to } replace />} /> {/* Comodin para todo, es la ruta en posicion 0 y no retroceder*/}
        </Routes>
      </div>
    </BrowserRouter>
    </Suspense>
  );
};