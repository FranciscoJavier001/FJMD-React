//**_______________________________________________________________________________________________________________________________________________*/

import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { LoginScreen } from '../components/auth/LoginScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';
import { useEffect } from 'react';
import { startChecking } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {

    const dispatch = useDispatch() //** Lanzo el dispatch cuando entren a la app, checking=false (ya termino la autentificion) */

    //** Para leer del store la propiedad checking */
    const { checking, uid } = useSelector(state => state.auth) //** Estar pendiente del auth, desestructuro el checking y auth */

    useEffect(() => { //** Es para ponerme al tiro de los cambios, aqui lo pusimos porque era importante */
        
        dispatch( startChecking() ) //** Esta pendiente del startChecking de types>typess, cuendo entres te avisa token */
    }, [ dispatch ]) //** Lanzame el dispatch de la accion */

    // console.log(checking); //** Al princioio en true, luego se pasa a false */

    //** No quiero mostrar nada hasta que el checking este en false */
    if( checking ) { //** Si estoy cargando voy a hacer un retorno del componente, voy a poner un h5 */
        return <h5>Espere...</h5>
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute /* Ruta publica con el componente que quiero mostrar */
                    exact path="/login"
                    component={ LoginScreen }
                    //** !!uid asi paso un string a un valor booleano, si tengo info es true, con ! es false !null true, !!null false*/
                    isAutenticated={ !!uid } //** Necesito un valor booleano para saber si esta autentificado y necesito el uid */
                    />

                    <PrivateRoute /* Si esta autentificado mandar al CalendarScreen */
                        exact
                        path="/"
                        component={ CalendarScreen }
                        isAutenticated={ !!uid }
                        />

                    <Redirect to="/" />{/* Este lo uso para redireccionar al / */}
                </Switch>
            </div>
        </Router>
    )
}