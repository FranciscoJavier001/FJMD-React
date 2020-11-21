// con rafc creamos otro funtional component esta funciom es un componente calido porque qcepta un solo argumento de objeto "props" que provienen de propiedqdes con datos y devuelve un elemento de react, llamamos a dichos componentes funcionales porque literalmente son funciones de javascript 
import React from 'react'
import { Link } from 'react-router-dom' //Este es un componente comun y corriente que nos las hace SPA y asi trabaja



export const NavBar = () => {
    return (
        // Este es etiqueta HTML dstinada para hacer la navegacion
        <
        nav > { /* Aqui esta la lista no ordenada */ } <
        ul >
        li { /* Aqui esta la lista */ } { /* Etiqueta HTML para una lista */ } <
        li >
        <
        link to = "./" > Home < /link> <
        /li> <
        li >
        <
        link to = "./About" > < /link> <
        /li>
        li < li > < li > < li < /li></li >
        <
        li > Login < /li> <
        /ul> <
        /nav>
    )
}