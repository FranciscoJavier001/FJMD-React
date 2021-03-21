//** Estas son acciones que vamos a definir */
import { types } from '../types/types'

//** Esto es una tarea asincrona, osea que se va a ejecutar todo el proceso, luego se va a encontrar con el dispatch que ejecuta la accion del login que es la que se va a aplicar directamente en el store (la fuente unica de la verdad), que modifica el state y nos regresa todo lo que estamos esperando  */
export const startLoginEmailPassword = (email, password) => { //** Esta funcion va a recibir el email y el password */
    return (dispatch) => { //** Esta funcion va a regresar un callback, osea una funcion a disparar */
        //** Hay que llamar a otro dispatch cuando ya se ejecute todo, cuando ya tenga la data */
        setTimeout(() => {
            dispatch( login( 123, 'Pedro')) //** Aqui voy a hacer un dispatch del login, con el usuario */
        }, 3500);
    }
}

export const login = (uid, displayName) => ({ //** Esta es la accion que voy a llamar cuando tenga el uid y el displayNameny esta accion me debe regresar un type.login */
    type: types.login,
    payload: { //** El payload va a ser un objeto que tenga un uid y el displayName */
        uid,
        displayName
    }
})