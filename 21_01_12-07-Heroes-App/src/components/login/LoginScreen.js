import React from 'react'

export const LoginScreen = ({ history }) => { //** Vamos a usar la desestructuracion y ahi vamos a tener el history */

    const handleLogin = () => { //** Esta es una funcion de flecha, que no recibe nada */
        history.push('/'); //** Asi le ponemos que va a hacer cuando toque el boton */
        history.replace('/'); //** Investigar */
    }

    return (
        // Container es un contenedor, que se pone donde le digamos, si le aignamos un margen de arriba, osea es una linea que se queda solo en lo que vamos a poner
        <div className="container mt-5">
            <h1>LoginScreen</h1>
            <hr/>

            <button
                className="btn btn-primary"
                onClick={ handleLogin } //** Este metodo hay que declararlo arriba, para que no nos de ninguna falla */
            >
                Login de usuario
            </button>
        </div>
    )
}
