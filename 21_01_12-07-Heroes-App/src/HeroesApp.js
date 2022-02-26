//**_______________________________________________________________________________________________________________________________________________*/
//** Esta es la App que estoy renderizando en el index.js */
//** Instalar react-router-dom "npm install react-router-dom" (Es para las routes/rutas)  */
import React, { useEffect, useReducer } from 'react'
import { AuthContext } from './auth/AuthContext'
import { authReducer } from './auth/authReducer'; //** Revisar Navegador/Components/HeroesApp_Conext.Provider */
import { AppRouter } from './routers/AppRouter'

const init = () => { //** FF no recibe ningun argumento y solo revisa el lS para ver si tengo el ojeto user, sino lo pone como falso  */
    return JSON.parse(localStorage.getItem('user')) || { logged: false }; //** JSON.parse=para evaluar el lS, si existe, sino retorno un objeto iS */
}

export const HeroesApp = () => { //** FC=rafc */

    //** Utilizo un reducer=aR(), el iS=Objeto vacio, y siempre el init=Siempre voy a leer el lS */
    const [user, dispatch] = useReducer(authReducer, {}, init) //** uR=Primero un estado, luego el dispatch - Actualiza los estados del logged */

    useEffect(() => { //** uE, pendiente de los cambios, con lS voy a colocar un estado(item) que va a ser en user l10 y lo que reciba el JSON */
        localStorage.setItem( 'user', JSON.stringify(user)); //** Nombre de la key (dejar cursor arriba del sI), y grabo lo que viene en JSON */
    }, [user]) //** Esta va a ser la dependencia - stringify=Convierte lo que sea en una cadena de texto*/

    return (

        //** Pongo Provider en nivel alto para distribuirlo en la App, los Valores del AC es el user-dispatch=(Acciones a disparar - types, login) */
        <AuthContext.Provider value={{ user, dispatch }}> {/* Aqui pongo el HOC - los valores son lo que se van a distribuir en la App */}
            <AppRouter /> {/* Es el componente que voy a mostrar/renderizar */}
        </AuthContext.Provider>
    )
}