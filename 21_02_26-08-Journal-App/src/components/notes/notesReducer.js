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

        case types.notesAddNew:
            return {
                ...state,
                notes: [ action.payload, ...state.notes ]
            }

            //** Voy a editar el reducer para saber que hacer cuando recibamos una tarea o una accion de este tipo */
            case types.notesLoad: //** Y que es lo que voy a hacer, voy a retornar un nuevo estado con el operador spred del state y las notas van a ser igual al action.payload, pero esto es un arreglo asi que voy a exparsirlo con el operador spred */
            return {
                ...state,
                notes: [ ...action.payload ]
            }

            //** Debo de implementar lo que va a hacer la accion de refreshNote */
            case types.notesUpdated:
                return {
                    ...state, //** Siempre hacer el spred en los types del estado anterior para la modificacion o cualquier cosa */
                    notes: state.notes.map( //** Ahora voy a tomar las notas que haya con el state y el map regresa un nuevo arreglo y voy a mutar la nota utilizando un operador ternario, voy a evaluar si la nota es igual al action.payload.id, que sea el id que estoy mandando de notes, si son iguales significa que es la nota que necesito actualizar entonces si el id es el mismo voy a retornar el action.payload.note, que el note es el note del payload de notes, caso contrario significa que no hay ninguna modificacion y pongo la note asi como esta */
                        note => note.id === action.payload.id
                        ? action.payload.note
                        : note
                    )
                }

                case types.notesDelete:
                    return {
                        ...state, //** Esparzamos el state para no perder el estado anterior */
                        active: null,
                        notes: state.notes.filter( note => note.id !== action.payload ) //** Esto quiere decir que debe regresar todas, menos la que yo seleccione */
                    }

                case types.notesLogoutCleaning:
                    return {
                        ...state, //** Voy a hacer el clon del State */
                        active: null, //** La nota activa va a ser igual a null */
                        notes: [] //** Va a ser igual a un arreglo vacio */
                    }

        default:
            return state; //** Solamente voy a hacer el return del state */
    }
}