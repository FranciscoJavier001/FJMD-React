//** Atencion, mira estas son las rutas del AppRouter, como lo vemos no son tan complicadas, solo se necesita entender los parametros principales de hacia donde va la aplicacion */

import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom"

import { AuthRouter } from './AuthRouter'
import { JournalScreen } from '../journal/JournalScreen'

export const AppRouter = () => {
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