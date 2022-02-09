//**_______________________________________________________________________________________________________________________________________________*/
//** Esta es la App que estoy renderizando en el index.js */
//** Instalar react-router-dom "npm install react-router-dom" (Es para las routes/rutas)  */
import React, { useEffect, useReducer } from 'react'
import { AuthContext } from './auth/AuthContext'
import { authReducer } from './auth/authReducer';
import { AppRouter } from './routers/AppRouter'

//** Ejecuta el init que va a pasar al iS y asi voy a tener el estado inicial de la applicacion */
const init = () => { //** Evalua la informacion con JSON.parse recibida del user en el lS, si es SI establece el usuario y si NO se pone en falso */
    return JSON.parse(localStorage.getItem('user')) || { logged: false };
}

export const HeroesApp = () => {

    const [user, dispatch] = useReducer(authReducer, {}, init) //** Cambio el nombre del state que es el primero porque va a regresar un user y el dispath si lo vamos a dejar porque vamos a dejar el dispatch de acciones donde yo quiera */

    //** Tarea. Voy a establecer que se quede el login del usuario aunque la pagina se recarge, asi que debo implementar un efecto que grabe en el localStorage lo que es el user y ese usuario cambia, un efecto que tenga como dependencia el usuario y que se dispare cada vez que el usuario cambia y lo va a guardar en el localStorage y lo pasamos para guardarlo con el stringify, para confirmar debo recargar la pagina y todavia tener el usuario */

    //** 1. Importamos el useEffect, y cada vez que el usuario cambie voy a disparar esa accion, la dependencia va a ser donde dice effect pero la modifico por por el localStorage.setItem('user', JSON.stringify(user)) (el nombre de la llave va a ser user, y lo que voy a guardar va a ser un JSON.stringify(user), y donde dice imput le pongo el user */

    useEffect(() => {
        localStorage.setItem( 'user', JSON.stringify(user));
    }, [user])

    return (
        //** Aqui lo voy a poner con el Provider y este lo que va a distribuir a lo largo de la aplicacion va a ser un objeto donde va a venir un reducer y el que va a ser sera el authREducer (asegurandonos que lo importe), el initialState va a ser un objeto vacio y el init va a leer el localStorage */
        // El user y el dispatch va a ser lo que voy a distribuir con el AuthContext, ahora yo puedo obtener el user en cualquier parte de la aplicacion, porque estoy en el nivel mas alto de la app (auque menos que el index)
        <AuthContext.Provider value={{ user, dispatch }}>
            <AppRouter /> {/* Es el componente que voy a mostrar/renderizar */}
        </AuthContext.Provider>
    
    )
}