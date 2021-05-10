//** Atencion, mira estas son las rutas del AppRouter, como lo vemos no son tan complicadas, solo se necesita entender los parametros principales de hacia donde va la aplicacion */

import React, { useContext, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom"

import { firebase } from '../firebase/firebase-config'

import { AuthRouter } from './AuthRouter'
import { JournalScreen } from '../components/journal/JournalScreen'

export const AppRouter = () => {

    //** Este efecto lo vamos a utilizar, para que aunque el usuario salga de la pagina, su sesion se mantenga */
    useEffect(() => { //** Por el momento aqui no voy a tener ninguna dependencia */
        //** Del archio de firebase hay un archivo importado de auth que lo vamos a utilizar */
        firebase.auth().onAuthStateChanged( (user) => {

            console.log(user);
        })
    }, [])

    return (
        <Router>
            <Switch>
                <Route
                path="/auth"
                component={ AuthRouter}
                />

                <Route
                exact
                path="/"
                component={ JournalScreen }
                />
                
                {/* Esto es para por si no encuentra ninguna ruta que nosotros definimos, en automatico nos mande aqui */}
                <Redirect to="/auth/login" />

            </Switch>
        </Router>
    )
}