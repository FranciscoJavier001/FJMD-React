//** Va a tener un login, solo quiero que aqui se grabe lo que es el usuario */

import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {

    const { setUser } = useContext( UserContext );

    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />
            <button 
                className="btn btn-primary"
                onClick={ ()=> setUser({
                    id: 123,
                    name: 'Fernando'
                })}
            >
                Login
            </button>
        </div>
    )
}

