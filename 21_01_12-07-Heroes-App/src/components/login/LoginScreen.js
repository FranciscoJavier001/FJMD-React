//**_______________________________________________________________________________________________________________________________________________*/
import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => { //** El LS recibe el history(este viene de Navegador/Components/props) */

    //** Este context esta en "Aqui - src/HeroesApp", lo defini en src/auth/AuthContext */
    const { dispatch } = useContext( AuthContext ); //** Esta en src/HeroesApp y en el dispatch vienen parametros que vamos a recibir */

    const handleLogin = () => { //** Funcion que no recibe nada */
        // history.push('/'); //** Ruta a la que voy a navegar con click en el login */
        // history.replace('/'); //** Asi no hay history, y solo me lleva directamente al "/" y no puedo regresar al login manualmente */

        //** La ultimaRuta, la sacamos del lS, que nos manda a la ultima pagina visitada o si no al "/", autentificado a marvel y si no al login*/
        const lastPath = localStorage.getItem('lastPath') || '/'; 
        
        dispatch({ //** Disparo la accion, que defini en los types, y ahi tengo contexto, paso estas variables aqui definidas con auth */
            type: types.login, //** Al hacer el login va a poner el name como Francisco con los types, que lo defini l.82 components/ui/Navbar */
            payload: {
                name: 'Francisco'
            }
        });

        history.replace( lastPath ); //** Al entrar/salir se remplaza todo, para exigir el login, al entrar manda a la ultima pagina visitada */
    }

    return (
        <div className="container mt-5"> {/* Container, lo pone medio centrado y el mt-5 es el espacio que tiene hacia arriba */}
            <h1>Login</h1>
            <hr/>

            <button
                className="btn btn-primary" //** btn=Boton, b-p=Color azul */
                onClick={ handleLogin } //** Metodo que se dispara*/
            >
                Login
            </button>
        </div>
    )
}