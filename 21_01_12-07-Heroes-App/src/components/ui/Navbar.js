//**_______________________________________________________________________________________________________________________________________________*/
//** Esto es un Navbar - Lo copie del Git */
import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types';

//  export const Navbar = ({ history }) => { //** Aqui en pego el history, no compartir mucha informacion por los props */

export const Navbar = () => { //** Es la linea 8, pero remplazo la sintaxis */

    //** Necesito acceso a AuthContext-dentro de useContext, del user-voy a extraer el name, y el dispatch hace el logout y purgo el reducer */
    const { user:{ name }, dispatch } = useContext( AuthContext );
    //** react-router-dom nos ofrece un useHistory, y soluciono el problema de compartir info a traves de las props */
    const history = useHistory(); //**  */

    // console.log(history);
    // console.log(name);

    const handleLogout = () => { //** Funcion al hacer click en el boton */

        // console.log('Click!'); //** Simulo el click de la funcion handleLogout */

        //** Cambie la pagina al login */
        history.replace('/login');

        dispatch({ //** Mando la accion de logout de types, borro todo y pongo el logged en false */
            type: types.logout
        });
    }

    return (
        //** navbar= Para que todo este junto y no haya espacios */
        //** navbar-expand-sm=para poner el navbar en fila y separados */
        //** navbar-dark=letras en color gris */
        //** bg-dark=fondo en negro */
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" //** Es para que salga al inicio y mas grande */
                to="/" //** Donde me lleva cuando hago click */
            >
                Asociaciones {/* Texto */}
            </Link>

            <div className="navbar-collapse"> {/* Hacer mas chico la anchura */}
                <div className="navbar-nav">{/* Para que todas esten en hileras */}

                    <NavLink 
                        activeClassName="active" //** Dond este seleccionado se quede en color blanco */
                        className="nav-item nav-link" //** nav-item=Item de navegacion - nav-link= es para que todos se vean a la altura */
                        exact //** Es la direccion a la que lleva */
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink //** Ruta que me lleva al Search en el NavBar */
                        activeClassName="active" //** Para que se quede blanco cuando este ahi */
                        className="nav-item nav-link"
                        exact
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2"> {/* navbar-collapse=salen las letras */}
                <ul className="navbar-nav ml-auto"> {/* navbar-nav=En fila - ml-auto=que salga hasta la derecha */}
                    
                    <span className="nav-item nav-link text-info"> {/* nav-link=Alineado - text-info=Color del nombre */}
                        { name } {/* Coloco el nombre del Usuario a la derecha */}
                    </span>

                    <button 
                        className="nav-item nav-link btn" //** nav-link=Color del campo de navegacion - btn=formato boton */
                        onClick={ handleLogout } //** Se dispara al hacer click */
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}