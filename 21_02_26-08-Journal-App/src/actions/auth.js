//** Estas son acciones que vamos a definir */
import { types } from '../types/types'

export const login = (uid, displayName) => ({ //** Esta es la accion que voy a llamar cuando tenga el uid y el displayNameny esta accion me debe regresar un type.login */
    type: types.login,
    payload: { //** El payload va a ser un objeto que tenga un uid y el displayName */
        uid,
        displayName
    }
})