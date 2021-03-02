//** Este solo es para autentificarnos, ya sea que ya estamos autentificados que nos mande al login, o en caso de no estar autentificados que nos mande al register, o si no existe ninguna ruta pues que nos mande directamente al login para ver que acciones tomar */

import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import { LoginScreen } from '../auth/LoginScreen'
import { RegisterScreen } from '../auth/RegisterScreen'

export const AuthRouter = () => {
    return (
        //** Osea que esa clase la va a buscar en el auth__main, ambos ya sea el login, como el register se encuentran dentro de la clase auth__main */
        <div className="auth__main">
            {/* Otro div para crear una caja blanca */}
            <div className="auth__box-container">
                <Switch>
                    <Route
                        exact
                        path="/auth/login"
                        component={ LoginScreen }
                    />

                    <Route
                        exact
                        path="/auth/register"
                        component={ RegisterScreen }
                    />

                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </div>
    )
}