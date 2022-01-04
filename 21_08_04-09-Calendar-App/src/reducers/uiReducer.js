//** ________________________________________________________________________________________________________________________________________________ */
import { types } from "../types/types";

const initialState = {
    modalOpen: false,
}

export const uiReducer = ( state = initialState, action ) => {

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