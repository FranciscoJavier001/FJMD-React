//** Revisar la informacion que otras paginas van a trabajar  */

import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const AboutScreen = () => { //** Este lo eportamos al MainApp.js */

    const { user, setUser } = useContext( UserContext );

    const handleClick = () => {
        setUser({});
    }

    return (
        <div>
            <h1>AboutScreen</h1>
            <hr />

            <pre>
                { JSON.stringify( user, null, 3 ) }
            </pre>

            <button 
                className="btn btn-warning"
                onClick={ handleClick }
            >
                Logout
            </button>

        </div>
    )
}