//** Este sistema de rutas principal solo es que este tiene el router, es la unica diferencia */
import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch
  } from "react-router-dom";

  import { AuthContext } from '../auth/AuthContext';
  import { PrivateRoute } from './PrivateRoute';
  import { PublicRoute } from './PublicRoute';

import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => { //** Esto es un FuntionalComponent comun y corriente */

    // Para leer si esta autentificado
    const { user } = useContext( AuthContext ) //** Primero voy a utilizar el user y en el segundo va a ser el AuthContext */

    return (
        <Router>
            <div>
                <Switch>
                    {/* Aqui vamos a renderizar un componente, las rutas hijas */}
                    {/* El loginScreen no tiene ningun Navbar porque no tiene ningun estilo */}
                    <PublicRoute 
                    exact 
                    path="/login" 
                    component={ LoginScreen }
                    isAutenticated={ user.logged }
                    />
                    {/* Esta es una ruta que no esta definida, vamos a renderizar el DashboardRoutes cuando estamos en el path="/", ahora aqui ya vemos el NavBar */}
                    {/* Este componente lo vamos a validar, para que el usuario este loggeado para ingresar a la app, y a continuacion vamos a proteger la ruta, entonces vamos a renderizar el componente de manera condicional */}

                    {/* Esta la voy a proteger para proteger toda la App, cambio el Route que estaba al principio por el PrivateRoute */}
                    <PrivateRoute 
                    path="/" 
                    component={ DashboardRoutes }
                    //** Asi lo vamos a proteger con el isAutenticated */
                    isAutenticated={ user.logged }
                    />
                </Switch>
            </div>
    </Router>
    )
}