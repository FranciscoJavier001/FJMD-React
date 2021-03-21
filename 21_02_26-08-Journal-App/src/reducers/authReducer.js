import { types } from "../types/types";

//** Este es el reducer de la autentificacion */

/*
    {
        El state va a estar vacio cuando yo no este autentificado, cuando este identificado voy a tener el "uid" (el ual va a usar firebase) y tambien va a tener el name del usuario que en mi caso seria mi nombre
    }
*/

export const authReducer = ( state = {}, action ) => { //** Esta es una funcion pura, y los reducer reciben el state y el action, el state lo voy a definir como un objeto vacio */
    switch (action.type  ) { //** Aunque sea 2 o 3 siempre las voy a manejar con un switch, y aqui voy a recibir el action.type que me va a ayudar a definir la accion que se va a ejecutar, pero estos type los voy a poner en otro directorio en la raiz que se llame types */
        case types.login: //** Debo de asegurarme que lo importe y este va a hacer una accion en el login que va a ser */
            return {
                uid: action.payload.uid, //** Esto viene de firebase */
                name: action.payload.displayName //** Asi voy a recibir el nombre */
            }

        case types.logout: //** Este lo va a restablecer a un objeto vacio */
            return {}
    
        default:
            return state; //** El caso por defecto va a ser que me regrese al mismo state */
    }
}