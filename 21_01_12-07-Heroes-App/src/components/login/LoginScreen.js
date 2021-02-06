import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => { //** Vamos a usar la desestructuracion y ahi vamos a tener el history */

    //** 1. Para la tarea lo primero que debo hacer es extraer el context, de aqui lo que me interesa es extraer el dispatch y en el useContext el AuthContext */
    const { dispatch } = useContext( AuthContext );

    const handleLogin = () => { //** Esta es una funcion de flecha, que no recibe nada */
        // history.push('/'); //** Asi le ponemos que va a hacer cuando toque el boton */
        // history.replace('/'); //** Investigar */

        //** Tarea.. Del ontext extraer el dispatch y ese dispatch tiene que mandar un action que tenga el tipo del case types.login y case types logout, el objeto que vamos a mandar en el payload de la accion va a ser algo sencillo como name: 'Francisco', es todo lo que necesito en el dispatch, esto deberia de establecerselo al reducer para ver en components en los hooks el logged en true y lo que colocamos en el name, y se va a mantener porque vamos a tomar todo lo que venga en el payload de la accion y tambien la propiedad logged que ya se autentifico */

        //** 2. Ahora voy a disparar esa accion, voy a ser el dispatch de un objeto que tiene un type y el types viene de types.login y luego viene el payload: { (y va a ser un objeto que tiene el name y mi nombre)}, y abajo pongo el replace de la ruta (pero ya tengo mi login en un nivel alto de la app) */
        
        //** Cambiamos el lugar donde estaba el replace */
        // history.replace('/'); //** Este me hace que cuando le pongo el login, en automatico me meta a la aplicacion */
        dispatch({
            type: types.login,
            payload: {
                name: 'Francisco'
            }
        });

        history.replace('/'); //** Este me hace que cuando le pongo el login, en automatico me meta a la aplicacion */
    }

    return (
        // Container es un contenedor, que se pone donde le digamos, si le aignamos un margen de arriba, osea es una linea que se queda solo en lo que vamos a poner
        <div className="container mt-5">
            <h1>Login</h1>
            <hr/>

            <button
                className="btn btn-primary"
                onClick={ handleLogin } //** Este metodo hay que declararlo arriba, para que no nos de ninguna falla */
            >
                Login
            </button>
        </div>
    )
}
