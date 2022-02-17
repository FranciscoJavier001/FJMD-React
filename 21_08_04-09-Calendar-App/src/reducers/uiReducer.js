//**_______________________________________________________________________________________________________________________________________________*/
import { types } from "../types/types";

const initialState = { //** Cuando ingresamos el mddal esta en false, al entrar a la app cambia a true */
    modalOpen: false,
}

//** Tenemos un estado inicial, o estado antes del cambio, aplicamos una accion y el nuevo producto es un estado con la modificacion esperada */
export const uiReducer = ( state = initialState, action ) => { //** Que esperamos despues de aplicarle una accion al state */

    switch ( action.type ) { //** Estos son los casos y va a ser lo que me regresa components>calendar>calendarScreen */
        case types.uiOpenModal:
            return {
                ...state,
                modalOpen: true
            }

        case types.uiCloseModal:
            return {
                ...state,
                modalOpen: false
            }
    
        default:
            return state;
    }
}