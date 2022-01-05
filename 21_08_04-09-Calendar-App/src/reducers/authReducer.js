import { types } from "../types/types";

const initialState = { //** initialState es un objeto donde voy a definir un par de cosas */
    //** Esta define si el usuario esta autentificado, en false se va al login y en true se queda en la pagina del calendario */
    checking: true, //** Propiedad que en cuanto se cargue va a ser true Redux>State */
    // uid: null, //** Estos dos solo los voy a tener cuando esten autentificados */
    // name: null //** Estos dos solo los voy a tener cuando esten autentificados */
}

//** Ya que tengo el initialState, voy a crear el Reducer */
//** Exporto la funcion, que recibe el initialState(auth>checking-true/false) y la action que tengo en types>types */
export const authReducer = ( state = initialState, action ) => {

    switch ( action.type ) { //** Con el action.type ya tenemos listo el reducer */

        //** Que queremos que haga cuando recibe una accion de authLogin */
        case types.authLogin: //** En el caso que recibas en authLogin de types>types, pongo checking en false */
            return { //** Regresame */
                ...state, //** Un nuevo estado pero como esta */
                ...action.payload, //** Y el name y el uid */
                checking: false //** Cambia el checking a false, porque se que ya lo autentifique y lo inicializo en false */
            }

        case types.authCheckingFinish:
            return {
                ...state, //** Retorno el State como este */
                checking: false //** Cambio el checking a false */
            }

        case types.authLogout: //** Logout va a caer aqui en el reducer */
            return { //** Regresa el checking en false */
                checking: false //** Cambio el checking a false, para saber que el usuario no esta autentificado, borra todo */
        }

        default:
            return state; //** Voy a mandar el state con los parametros que tenga */
    }
}