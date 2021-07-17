import { authReducer } from "../../reducers/authReducer"
import { types } from "../../types/types"


describe('Pruebas en el authReducer', () => {
    
    test('debe de realizar el login', () => {
        
        const initState = {} //** Este es un objeto vacio, simulando el que tengo en el authReducer */
        
        const action = {
            type:types.login,
            payload:{
                uid: 'abc', //** Recibe el uid y el displayname */
                displayName: 'Francisco'
            }
        }

        const state = authReducer( initState, action ) //** Recibe dos parametros */

        // console.log( state );

        expect( state ).toEqual({
            uid: 'abc',
            name: 'Francisco'
        })
    })

    test('debe de realizar el logout', () => {
        
        const initState = {
            uid: 'qaz',
            name: 'Francisco'
        }
        
        const action = {
            type:types.logout,
        }

        const state = authReducer( initState, action ) //** Recibe dos parametros */

        // console.log( state );

        expect( state ).toEqual({}) //** Me debe retornar el arreglo vacio */
    })

    test('no debe de hacer cambios en el state', () => {
        
        const initState = {
            uid: 'qaz',
            name: 'Francisco'
        }
        
        const action = {
            type: 'qwe',
        }

        const state = authReducer( initState, action ) //** Recibe dos parametros */

        // console.log( state );

        expect( state ).toEqual( initState ) //** Debe regresarme el estado inicial */
    })
})
