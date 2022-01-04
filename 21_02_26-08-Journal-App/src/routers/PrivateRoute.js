//**_________________________________________________________________________________________________________________________________________________*/
//** Este FC va a tener un comportamiento especial */

import React from 'react';
import PropTypes from 'prop-types'; //** Importo los PropTypes, necesito el isAutenticated como booleano  */

import { Redirect, Route } from 'react-router-dom'

export const PrivateRoute = ({ //** Voy a recibir varios elementos en los props, para saber si esta autentificado */
    isAutenticated,
    component:Component, //** Necesito el component(renombro con ":"" es Component por "C"-Mayuscula) de la persona que quiera entrar */
    ...rest //** Los argumentos los voy a almacenar en la variable ...rest, para mandarlos al component */
}) => {

    return (
        <Route { ...rest } //** Ruta va a tener el resto de propiedades que estoy recibiendo en el ...rest linea 12 */
            component={ (props) => ( //** component recibe las props(history/location/params), pero retorno con () y es el isAutenticated */
                ( isAutenticated ) //** Evaluo si esta autentificado "Operador Ternario" */
                ? ( <Component { ...props } /> ) //** Regresame el Component, pero con las props desestructuradas, y entra */
                : ( <Redirect to="/auth/login" /> ) //** Si no esta autentificado redireccionalo al login */
            )}
        />
    )
}

// Para utilizar el PrivateRoute lo vamos a implementar en el AppRouter para proteger el { DashboardRoutes }
//** PrivateRoute */
PrivateRoute.propTypes = {
    isAutenticated: PropTypes.bool.isRequired, //** Asi le decimos que es booleano y que es Requerido */
    component: PropTypes.func.isRequired //** Va a ser una funcion, igual requerida */
}
