import { types } from "../types/types";

const initialState = {
    loadin: false,
    msgError: null //** Este lo inicializamos vacio */
}

export const uiReducer = ( state = initialState, action ) => { //** Funcion de flecha que recibe el state y lo inicializara con como un objeto que va a tener varias cosas, y luego tambien definimos el action que defino abajo */

    switch (action.type) {
        case types.uiSetError:
            return { //** Esto es lo que voy a recibir en el msgError */
                ...state, //** Voy a dejar el mismo state pero voy a cambiar el msgError */
                msgError: action.payload //** Lo que venga en el payload va a ser lo que tenga el mensaje de error */
            }

        case types.uiSetError:
            return { //** Esto es lo que voy a recibir en el msgError */
                ...state, //** Voy a dejar el mismo state pero voy a dejar el msgError en null */
                msgError: null //** Error se queda en null */
            }
    
        default:
            return state;
    }
}