//** Atencion, mira estas son las rutas del AppRouter, como lo vemos no son tan complicadas, solo se necesita entender los parametros principales de hacia donde va la aplicacion */

import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from "react-router-dom"

import { useDispatch } from 'react-redux'

import { firebase } from '../firebase/firebase-config'
import { AuthRouter } from './AuthRouter'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

import { JournalScreen } from '../components/journal/JournalScreen'
import { login } from '../actions/auth'

export const AppRouter = () => {

    const dispatch = useDispatch();

    //** Para evaluar si esta autentificado para esto voy a crearme un estado local en el useState */
    const [ checking, setChecking ] = useState(true); //** Que tenga la variable de checking como que esta revisando el estado de firebase, pero mientras esto sea true no voy a mostrar nada mas de la aplicacion */
    const [ isLoggedIn, setIsLoggedIn ] = useState(false)

    //** Este efecto lo vamos a utilizar, para que aunque el usuario salga de la pagina, su sesion se mantenga */
    useEffect(() => { //** Por el momento aqui no voy a tener ninguna dependencia */
        //** Del archio de firebase hay un archivo importado de auth que lo vamos a utilizar */
        firebase.auth().onAuthStateChanged( (user) => {

            if (user?.uid) { //** Esto quiere decir que si estoy autentificado, el "?" evalua si el objeto user tiene algo */
                dispatch( login( user.uid, user.displayName ) ) //** Ahora puedo hacer el dispatch de cualquier accion que se me venga en gana, ahora voy a hacer el dispatch mandando como argumento el user.uid y el user.displayName, de aqui puedo extraer todo lo que necesite */
                setIsLoggedIn( true ) //** Esto quiere decir qe esta loggeado de manera correcta */
            } else {
                setIsLoggedIn( false ) //** Pues en caso contrario pues no esta loggeado */
            }

            //** El setChecking voy a mostrarlo aqui, cuando ya tengo una respuestade firebase */
            setChecking(false) //** De esta manera ya tengo la respuesta, osea ya se si tengo el usuario o no lo tengo */

        })
    }, [ dispatch, setChecking, setIsLoggedIn ]) //** Esto solo se ejecuta una vez y esto es un observable que va a estar al pendiente de los cambios en la autentificacion del usuario, si cambia la autentificacion esto va a cambiar, es decir el callback se va a llamar */

    if ( checking ){
        return ( //** Si esta en true voy a hacer el return de un nuevo objeto */
            <h1>Wait...</h1>
        )
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                    path="/auth"
                    component={ AuthRouter }
                    isAutenticated={ isLoggedIn } //** Aqui tenia algo llamado path, pero el isAutenticated y la variable va a ser isLoggedIn */
                    />

                    <PrivateRoute
                    exact
                    isAutenticated={ isLoggedIn } //** Aqui tenia algo llamado path, pero el isAutenticated y la variable va a ser isLoggedIn */
                    path="/"
                    component={ JournalScreen }
                    />
                    
                    {/* Esto es para por si no encuentra ninguna ruta que nosotros definimos, en automatico nos mande aqui */}
                    <Redirect to="/auth/login" />

                </Switch>
            </div>
        </Router>
    )
}