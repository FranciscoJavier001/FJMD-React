import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import { LoginScreen } from '../components/auth/LoginScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/login" component={ LoginScreen } /> {/* Aqui voy a poner una ruta que va a ser exacta, con la direccion y el componente que vquiero mostrar */}
                    <Route exact path="/" component={ CalendarScreen } />

                    <Redirect to="/" />{/* Este lo uso para redireccionar al / */}
                </Switch>
            </div>
        </Router>
    )
}