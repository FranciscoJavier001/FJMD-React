//** Routes lo unico que cambia es lo que es independiente ha esa pantalla, pero no va a hacer peticiones adicionales al servidor a menos que sea necesario, que no haga refresh del navegador web para cambiar entre pantallas */
//** Yo pongo div cuando tengo varios componentes */
//** High Order Component significa que tiene un componente adentro */

import React from 'react';
import {
    BrowserRouter as Router, //** Asi le cambiamos el nombre, con el "as" */
    Switch,
    Route,
    Redirect,
  } from 'react-router-dom';

import { NavBar } from './NavBar';

import { LogoutScreen } from './LogoutScreen';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';

export const AppRouter = () => { //** Exportamos AppRouter a MainApp.js */
    return (
        <Router>
            {/* El Div lo ponemos porque este va manejar toda la info que va a tener el Router (rutas) */}
            <div>
                
                {/* Esta es la barra de navegacion, que la definimos en el NavBar, asi es como se declaran los componentes que se van a renderizar, por eso esta la ponemos arriba */}
                <NavBar />

                {/* Esto va a estar en el container, para verlo mas bonito */}
                <div className="container">
                    {/* El Switch va a renderizar el componente selecciondo del path, por eso el navBar aparece arriba */}
                    <Switch>
                        {/* Ruta a la cual va a entrar y el que va a renderizar se pone en el component, adentro vemos que es lo que va a renderizar, osea dentro del componente, recuerda, hay que ponerle que sea exact */}
                        <Route exact path="/" component={ HomeScreen } />
                        
                        <Route exact path="/login" component={ LoginScreen } />
                        <Route exact path="/logout" component={ LogoutScreen } />
                        
                        {/* Asi delclaramos que si no encuentra ninguno, se valla directamente al HomeScreen */}
                        <Redirect to="/" />

                    </Switch>
                </div>
            </div>
        </Router>
    )
}
