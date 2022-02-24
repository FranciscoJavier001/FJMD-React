//**_______________________________________________________________________________________________________________________________________________*/
import { types } from "../types/types";

//** Este va a ser el estado si el usuario esta autentificado, y en caso contrario el logged en false */
// const state = { 
//     name: 'Francisco',
//     logged: true
// }

export const authReducer = ( state = {}, action ) => { //** Reducer que recibe el state como un arreglo vacio, que va a ejecutar una accion */

    switch ( action.type ) { //** Switch=Son los casos a evaluar - Las Acciones vienen de src/types/types */
        case types.login: //** Esta va a ser la accion del login de types/types y de ahi lo importamos a src/components/loginScreen */
            return { //** Para el return voy a retornar todo lo que contenga el action.payload que viene mi nombre src/components/loginScreen l21 */
                ...action.payload,
                logged: true //** Otra propiedad que pongo que va a ser true si pasa la autentificacion*/
            }

            case types.logout:
                return { //** Aqui no tengo el payload, osea simplemente el estado de logged en false */
                    logged: false
                }
    
        default: //** El estdo por default va a ser como lo encuntre en el state */
            return state;
    }
}