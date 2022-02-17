//** Quiero tener la informacion del usuario  */

import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const HomeScreen = () => {

    const {user} = useContext(UserContext); //** El segundo es la instancia donde se va a buscar, y el user ya lo desestructuramos directamente desde el useState que tiene dentro el valor de user */

    // console.log( user );

    return (
        <div>
            <h1>HomeScreen</h1>
            <hr />

            {/* Dentro del JSON primero se va a mostrar el usuario, luego null es para que solo muestre un parametro en un numero y el 3 es el numero de espacios */}
            <pre>
                { JSON.stringify( user, null, 3 ) }
            </pre>

        </div>
    )
}