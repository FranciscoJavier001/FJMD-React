//** Routes lo unico que cambia es lo que es independiente ha esa pantalla, pero no va a hacer peticiones adicionales al servidor a menos que sea necesario, que no haga refresh del navegador web para cambiar entre pantallas */
//** Yo pongo div cuando tengo varios componentes */
//** High Order Component significa que tiene un componente adentro */

import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from 'react-router-dom';

import { NavBar } from './NavBar';

import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';

export const AppRouter = () => { //** Exportamos AppRouter a MainApp.js */
    return (
        <Router>
            <div>
                
                <NavBar />

                <div className="container">
                    {/* El Switch va a renderizar el componente selecciondo del path, por eso el navBar aparece arriba */}
                    <Switch>
                        {/* Ruta a la cual va a entrar y el que va a renderizar se pone en el component*/}
                        <Route exact path="/" component={ HomeScreen } />
                        
                        <Route exact path="/about" component={ AboutScreen } />
                        <Route exact path="/login" component={ LoginScreen } />
                        
                        <Redirect to="/" />

                    </Switch>
                </div>
            </div>
        </Router>
    )
}
