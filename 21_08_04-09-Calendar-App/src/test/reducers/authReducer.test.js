//**_______________________________________________________________________________________________________________________________________________*/
import { authReducer } from "../../reducers/authReducer"
import { types } from "../../types/types"

const initState = {
    checking: true
}

describe('Pruebas en el authReducer', () => {
    
    test('debe de retornar el estado por defecto', () => {
        
        const action = {} //** Mando un objeto vacio */
        const state = authReducer( initState, action) //** Viene del authReducer, mando el initState y el action */

        expect( state ).toEqual( initState )
    })
    
    test('debe de autentificar el usuario', () => {
        
        const action = { //** Accion va a ser igual al login, que es un objeto que tiene el type y el payload */
            type: types.authLogin,
            payload: { //** Va a tener el uid y el name */
                uid: '123',
                name: 'Francisco'
            }
        }
        const state = authReducer( initState, action ) //** Me creo el nuevo state, mando el initState y el action */

        // console.log(state); //** Para ver el estado */

        expect( state ).toEqual({ checking: false, uid: '123', name: 'Francisco' }) //** Esperamos lo que viene en el objeto */
    })  
})