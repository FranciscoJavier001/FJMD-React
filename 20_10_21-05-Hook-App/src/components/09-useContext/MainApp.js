//** Los Routers son SPA */
//** Recuerda, esta es la Aplicacion como tal, que la ponemos en el Index para mostrarla */

import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

export const MainApp = () => {

    const [user, setUser] = useState({});

    return ( 
        //** Mira, como aqui definio el HighOrderComponent, de UserContext, lo declara aqui para que este disponible para sus hijos, que en este caso va a ser AppRouter, donde tenemos especificado literalmente todos los componentes que estan en el DOM, al parecer en la lista de componentes esta el Context.Provider, que aqui lo declaramos y nos da el valor de usuario y esta a la espera de que sea cambiado el estado del setUser para mostrarlo otra vez, con el value definimos la informacion que queremos compartir, en este caso, arriba declaramos la constante del useState, con sus valores por defecto, vamos a compartir la informacion que este dentro del value */
        <UserContext.Provider value={{
            user,
            setUser
        }}>

            {/* Entiendo, esto es para ver lo que vamos a renderizar desde el AppRouter y por default es el HomeScreen */}
            <AppRouter /> 

        </UserContext.Provider>
    )
}