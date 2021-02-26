//** Este solo es para autentificarnos, ya sea que ya estamos autentificados que nos mande al login, o en caso de no estar autentificados que nos mande al register, o si no existe ninguna ruta pues que nos mande directamente al login para ver que acciones tomar */

import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import { LoginScreen } from '../auth/LoginScreen'
import { RegisterScreen } from '../auth/RegisterScreen'

export const AuthRouter = () => {
    return (
        <div>
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
    )
}