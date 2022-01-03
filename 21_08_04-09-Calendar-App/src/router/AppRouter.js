import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { LoginScreen } from '../components/auth/LoginScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';
import { useEffect } from 'react';
import { startChecking } from '../actions/auth';

export const AppRouter = () => {

    const dispatch = useDispatch() //** Para lanzar el dispatch */

    useEffect(() => { //** Es para ponerme al tiro de los cambios, aqui lo pusimos porque era importante */
        
        dispatch( startChecking() ) //** Esta pendiente del startChecking de types>typess */
    }, [ dispatch ]) //** Lanzame el dispatch de la accion */

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