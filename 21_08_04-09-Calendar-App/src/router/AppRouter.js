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

    const dispatch = useDispatch() //** Para lanzar el dispatch, pero exactamente cuando entren a la app */

    useEffect(() => { //** Es para ponerme al tiro de los cambios, aqui lo pusimos porque era importante */
        
        dispatch( startChecking() ) //** Esta pendiente del startChecking de types>typess, cuendo entres te avisa token */
    }, [ dispatch ]) //** Lanzame el dispatch de la accion */

    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/login" component={ LoginScreen } /> {/* Ruta exacta con el componente que quiero mostrar */}
                    <Route exact path="/" component={ CalendarScreen } /> {/* Si no tiene nada mandalo al CalendarScreen */}

                    <Redirect to="/" />{/* Este lo uso para redireccionar al / */}
                </Switch>
            </div>
        </Router>
    )
}