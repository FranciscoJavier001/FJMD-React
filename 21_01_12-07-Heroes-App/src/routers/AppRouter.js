//**_______________________________________________________________________________________________________________________________________________*/
//** Este sistema de rutas principal solo es que este tiene el router, es la unica diferencia */
import React, { useContext } from 'react' //** useContext nos permite acceder a datos globales desde cualquier componente */
import {
    BrowserRouter as Router, //** Le cambiamos el nombre a Router */
    Switch
  } from "react-router-dom";

  import { AuthContext } from '../auth/AuthContext'; //** Ahi creamos el createContext */
  import { PrivateRoute } from './PrivateRoute';
  import { PublicRoute } from './PublicRoute';

import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => { //** exporto este FC a HeroesApp */

    const { user } = useContext( AuthContext ) //** Accedemos al user que viene de src/auth/AuthContext, donde se creo "createContext" */
    // console.log(user); //** Asi vemos si el logged esta en false/true */

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute //** La Definimos en src/>routers/PublicRoute, esta pagina va a ser la primera */
                    exact //** Para que la Ruta sea Exacta */
                    path="/login" //** Cual va a ser la direccion */
                    component={ LoginScreen } //** Al componente donde voy a renderizar */
                    isAutenticated={ user.logged } //** Asi confirmamos si no esta autentificado isAutenticated, estado actual del usuario */
                    />

                    <PrivateRoute //** La Definimos en src/>routers/PrivateRoute, se accede a esta pagina al logearse, auqui hay mas componentes */
                    path="/" //** Esta es la ruta padre y pueda distribuirla a los hijos */
                    component={ DashboardRoutes } //** Aqui se Redirige el componente, aqui hay muchas rutas y se renderiza */
                    isAutenticated={ user.logged } //** Asi confirmamos si esta autentificado isAutenticated, porque ya tenemos context l18 */
                    />
                </Switch>
            </div>
    </Router>
    )
}