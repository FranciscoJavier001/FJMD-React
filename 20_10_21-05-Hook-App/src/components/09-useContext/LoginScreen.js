//** Va a tener un login, solo quiero que aqui se grabe lo que es el usuario */

import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {

    const { user, setUser } = useContext( UserContext );

    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />

            <pre>
                { JSON.stringify( user, null, 3 ) }
            </pre>

            <button 
                className="btn btn-primary"
                onClick={ ()=> setUser({ //** Esta Funcion llama al setUser */
                    id: 123,
                    name: 'Francisco'
                })}
            >
                Login
            </button>
        </div>
    )
}