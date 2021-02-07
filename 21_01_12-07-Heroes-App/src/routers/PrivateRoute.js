//** Este FC va a tener un comportamiento especial */

import React from 'react';
import PropTypes from 'prop-types'; //** Importo los PropTypes, para obligarme a utilizarlos de manera correcta, por lo menos necesito el isAutenticated como booleano  */

import { Redirect, Route } from 'react-router-dom'

export const PrivateRoute = ({ //** Aqui voy a recibir varios elementos en los props, para saber si esta autentificado */
    isAutenticated,
    component:Component, //** Voy a necesitar el componente que la persona quiera renderizar, pero la sintaxis de los componentes tiene que estar con una mayuscula, porque sino se miraria como un elemento html normal y lo puedo renombrar con los ":" */
    ...rest //** El exact y los demas los voy argumentos y los demas los voy a recuperar y almacenar aqui utilizando el operador "rest", para que el resto de los componentes caigan aca, de esa manera puedo mandarselos al componente de la manera que yo quiero */
}) => {

    // console.log(rest.location.pathname); //** Esto es para ver la ruta en la que estamos actualmente y esta la vamos a guardar en el localStorage */
    localStorage.setItem('lastPath', rest.location.pathname) //** Voy a guardar la ruta en una variable llamada lastPath que va a ser la ultima ruta que se visito, se quedo guardado en una variable del Local Storage en Application */

    return (
        //** Lo que voy a retornar un Route, va a ser una ruta de react-router-dom y esta ruta va a tener todo el resto de las propiedades que estoy recibiendo arriba con el ...rest, pero quiero retornar el componente de manera condicional va a ser mediante la condicion del "component", se puede llamar con un callback y va a recibir las { props }, que seria el history/location/params y voy a regresar eso de manera condicional, pero lo que voy a retornar lo voy a poner entre (), mediante la expresion usando un ternario voy a evaluar el isAutenticated, si esta autentificado con "?", lo que quiero hacer es regresar el Component, al que el usuario quiere entrar, pero quiero adicionarle con el operador spred "{...props}", las props y cierro el componente, dato curioso, cuando estamos en los argumentos es el rest y abajo en el route es el spred con los "...", en el lugar que se usa asi cambia el nombre, asi que si esta autentificado manda todo igual y con los ":" es como decir que si no esta autentificado que regrese el "Redirect" que es otro componente que lo va a redireccionar a la pagina del login */
        <Route { ...rest }
            component={ (props) => (
                ( isAutenticated )
                ? ( <Component { ...props } /> )
                : ( <Redirect to="/login" /> )
            )}
        />
    )
}

// Esto me va a ayudar a utilizar el PrivateRoute de manera correcta y este lo vamos a implementar en el AppRouter para proteger el { DashboardRoutes }
PrivateRoute.propTypes = {
    isAutenticated: PropTypes.bool.isRequired, //** Asi le decimos que es booleano */
    component: PropTypes.func.isRequired //** Va a ser una funcion */
}
