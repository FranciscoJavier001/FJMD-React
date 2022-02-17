import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types';

// export const Navbar = ({ history }) => { //** Aqui pegamos el history, como en la pagina de LoginScreen, pero es importante no compartir mucha informaciona traves de las propertyes y que los componentes sean mas sencillos y limpios */

export const Navbar = () => { //** Esta es la que estaba en la linea 6, pero ahora la vamos a remplazar de otra manera */

    //** 1. Para esta tarea voy a necesitar acceso al context, en el contextValue voy a ponerle el AuthContext y en el context voy a extraer el user, y en el user voy a extraer el name del objeto */
    //** Para la tarea del logout hay que hacer el dispatch y purgar la informacion que tenemos en el reducer */
    const { user:{ name }, dispatch } = useContext( AuthContext );
    //** react-router-dom nos ofrece un useHistory */
    const history = useHistory(); //** Este me regresa un history y asi de sencillo soluciono el problema de compartir la info a traves de las props */

    // console.log(history);
    // console.log(name);

    const handleLogout = () => { //** Esta es la funcion que le vamos a dar al boton */
        //** Llamamos el dispatch, mandamos una accion que tiene el type y ese types viene del .logout, esto es la primera parte de la tarea, asi se borra todo y el logged en false */
        //** Con esto hacemos que primero navege, despues purge, atencion el as seguientes lineas */
        //** Llamamos el history.replace, para que ya no mantenga esta pagina (es decir para que cambie la navegcion y que se lanze al login), entonces el NavBar ya esta recibiendo el history y por consecuencia aqui ya puedo poner el replace para que funcione */

        // console.log('Click!'); //** Este se va a hacer cuando se de un click, osea en la prueba si se simula el click de esa funcion */

        history.replace('/login');

        dispatch({
            type: types.logout
        });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                KANDICHI
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">
{/* 
Masaje Reductivo 10 sesiones + 1 pedicura de regalo 2999
Pedicura Febrero 2x1 380
Febrero 550
Terapia Reiki - Es una tecnica de canalizacion y transmision de energia vital a traves de la imposicion de manos, que se utiliza para obtener paz y equilibrio en todos los niveles: fisico, mental, emocional y espiritual 300
Pedicura Spa 350
Callosidades 280
Uñas Enterradas 300
Reconstruccion de uñas 400
Hidratacion Extrema Agotado
Resequedad Extrema 290
Preventivo 200
Ventosas calientes Bebida y parches de colageno de cortesia 300
Masaje Incluimos bebida de cortesia y parches de colageno de hidratacion extrema
Hongos bye
*/}
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/marvel"
                    >
                        Servicios
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/dc"
                    >
                        Masajes
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/search"
                    >
                        Search
                    </NavLink>

                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    
                    {/* Aqui voy a crear un parrafo que me diga un nombre */}
                    {/* Otra tarea, que extraigamos el context con el nombre y lo mostremos aqui, esto lo vamos a tener que reemplazar */}
                    <span className="nav-item nav-link text-info">
                        { name }
                    </span>

                    {/* Que cuando toquemos el boton nos saque con el { handleLogout }, pero lo declaramos, que sea una funcion de flecha que no recibe ningun parametro y lo que hace es el dispatch de la accion respectiva que es el logout usando los types y asegurarnos que en el estado de la aplicacion no tengamos el nombre, es decir que se haya borrado y que tenga el logged en false, echo eso significa que paso por el reducer, que quitamos la identificacion del usuario, que se guardo en el localStorage porque se disparo el efecto, en cuestion es solo disparar la accion y que navegemos a la pagina del login */}
                    <button 
                        className="nav-item nav-link btn"
                        onClick={ handleLogout }
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}