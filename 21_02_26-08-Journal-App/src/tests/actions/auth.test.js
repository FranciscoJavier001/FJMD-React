import { login, logout } from "../../actions/auth"
import { types } from "../../types/types"

describe('Pruebas con las acciones de Auth', () => {
    
    test('login y logout deben de crear la accion respectiva', () => {
        
        const uid = 'ABC123'
        const displayName = 'Francisco'

        const loginAction = login( uid, displayName ) //** Este recibe el uid y el displayName */
        const logoutAction = logout() //** Este no recibe ningun argumento */

        expect( loginAction ).toEqual({ //** Esperamos que sea el mismo objeto donde esta la funcion en el auth */
            type: types.login,
            payload: { //** El payload va a ser un objeto que tenga un uid y el displayName */
                uid,
                displayName
            }
        })

        expect( logoutAction ).toEqual({
            type: types.logout
        })
    })

    test('debe de realizar el logout', () => {
        
    })
    
})
