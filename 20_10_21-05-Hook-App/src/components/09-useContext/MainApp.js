//** Los Routers son SPA */
//** Recuerda, esta es la Aplicacion como tal, que la ponemos en el Index para mostrarla */

import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

export const MainApp = () => {

    const [user, setUser] = useState({});

    return (
        <UserContext.Provider value={{
            user,
            setUser
        }}>

            <AppRouter />

        </UserContext.Provider>
    )
}