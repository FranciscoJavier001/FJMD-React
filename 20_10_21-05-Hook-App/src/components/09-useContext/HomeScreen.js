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

            <pre>
                { JSON.stringify( user, null, 3 ) }
            </pre>

        </div>
    )
}