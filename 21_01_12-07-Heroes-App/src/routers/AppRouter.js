//** Este sistema de rutas principal solo es que este tiene el router, es la unica diferencia */
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => { //** Esto es un FuntionalComponent comun y corriente */
    return (
        <Router>
            <div>
                <Switch>
                    {/* Aqui vamos a renderizar un componente, las rutas hijas */}
                    {/* El loginScreen no tiene ningun Navbar porque no tiene ningun estilo */}
                    <Route exact path="/login" component={ LoginScreen }/>
                    {/* Esta es una ruta que no esta definida, vamos a renderizar el DashboardRoutes cuando estamos en el path="/", ahora aqui ya vemos el NavBar */}
                    <Route path="/" component={ DashboardRoutes }/>
                </Switch>
            </div>
    </Router>
    )
}