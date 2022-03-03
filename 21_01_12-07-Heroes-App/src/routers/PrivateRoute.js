//**_______________________________________________________________________________________________________________________________________________*/
import React from 'react';
import PropTypes from 'prop-types'; //** PT, voy a ocupar el isAutenticades como booleano */

import { Redirect, Route } from 'react-router-dom'

export const PrivateRoute = ({ //** Aqui voy a recibir varios elementos en los props, para saber si esta autentificado */
    isAutenticated,
    component:Component, //** componente que la persona va a renderizar, pero para que no sea elemento HTML lo renombro con : */
    //** Aqui en los argumentos los "..." es el rest */
    ...rest //** Voy a almacenar los argumentos aqui, asi se lo mando al componente del Route l20 (Aqui cae el path) */
}) => {

    // console.log(rest); //** Contiene todos los argumentos de la ruta path/location */

    // console.log(rest.location.pathname); //** Ruta en la que estamos actualmente, se guarda en lS */
    localStorage.setItem('lastPath', rest.location.pathname) //** Creo lP es ultima ruta visitada, la obtengo de las prop rest, se guarda en lS */

    return (
        <Route { ...rest } //** Route tiene las props l11 ejemplo exact/>path=Es enviado a esta ruta */
            component={ (props) => ( //** component va a ser evaluado con estas condiciones, recibe las props que son history/location/params */
                ( isAutenticated ) //** Usando un operador ternario para evaluar si esta autentificado  */
                //** Aqui es el operador spred, donde se usa asi cambia el nombre */
                ? ( <Component { ...props } /> ) //** Si esta autentificado me regresa el componente al que la quiero entrar y adiciono las pros */
                : ( <Redirect to="/login" /> ) //** Si no esta autentificado lo mandamos al login */
            )}
        />
    )
}

PrivateRoute.propTypes = { // Utilizo PrivateRoute y lo implemento en AppRouter para proteger el { DashboardRoutes }
    isAutenticated: PropTypes.bool.isRequired, //** Asi le decimos que es booleano, y definimos que es requerida */
    component: PropTypes.func.isRequired //** Va a ser una funcion y definimos que es requerida */
}