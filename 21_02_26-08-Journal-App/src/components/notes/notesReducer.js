//** Aqui voy a poner como quiero que este el State */

import { types } from "../../types/types";

//** Va a tener notes como un arreglo, ese es el primero y el segundo va a ser el active, que puede ser null o va a poder tener el objeto de la nota activa, si tenemos null, no hay ninguna nota seleccionada y si esta activa, va a tener el id, que va a ser un id unico de firebase y el title como un string y el body que tambien va a ser un string , la url de la imagen y una fecha  */

//** El reducer va a ser una funcion pura */
const initialState = { //** Este va a ser el estado inicial del reducer */
    notes: [], //** El objeto inicial va a ser notes como un objeto vacio */
    active: null
}

export const notesReducer = ( state = initialState, action ) => { //** Recuerda primero ponemos lo que recibe, y el state va a ser igual al initialState */

    switch (action.type) { //** Aqui voy a empezar a definir muchos tipos */

        //** Despues de hacer lo de la nueva nota con el dispatch en el notes, voy a poner el tipo aqio */
        case types.notesActive:
            return { //** Aqui lo que voy a hacer va a ser regresar un nuevo estado, osea la clonacion del estado anterior, para siempre regresar un nuevo estado, no mutar el anterior */
                ...state,
                active: { //** Voy a regresar la nota activa que va a ser un objeto del action.payload */
                    ...action.payload
                }
            }

        default:
            return state; //** Solamente voy a hacer el return del state */
    }
}