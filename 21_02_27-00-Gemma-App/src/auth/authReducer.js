//** Esto es una simple funcion pura */

import { types } from "../types/types";

// const state = { //** Voy a tener una estado que sea parecido a este que tenga el name del usuario y el logged en true, esto va a ser mi estado si el usuario esta autentificado, y si no esta autentificado va a tener el logged en falso */
//     name: 'Francisco',
//     logged: true
// }

export const authReducer = ( state = {}, action ) => { //** Esta funcion recibe el state que va a ser un objeto y recibe el action que va a ser lo que quiero hacer y esta es una funcion de flecha y la vamos a exportar para utilizar en otro lugar y dentro voy a tener un switch que vamos avaluar el action.type */

    switch ( action.type ) {
        case types.login: //** Aqui ingresamos las aciones, uno es cuando esta en el login y en el logout, importamos el types y escribimos la accion que yo quiero despues del punto */
            return { //** Para el return voy a retornar todo lo que contenga el action.payload */
                ...action.payload,
                //** Voy a poner otra propiedad interesante que va a ser la autentificacion del usuario que va a ser logged */
                logged: true //** Va a ser true si pasa la autentifficacion */
            }

            case types.logout:
                return { //** Voy a hacer el return del objeto donde no me interese nada lo que tenga en el payload, simplemente que tenga el logged en false */
                    logged: false
                }
    
        default: //** El default va a ser el state asi como se encuentre */
            return state;
    }
}