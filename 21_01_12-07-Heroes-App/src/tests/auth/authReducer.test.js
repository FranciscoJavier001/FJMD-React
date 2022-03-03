//**_______________________________________________________________________________________________________________________________________________*/
import { authReducer } from "../../auth/authReducer"
import { types } from "../../types/types";

describe('Pruebas en authReducer', () => {

    test('Debe de retornar el estado por defecto', () => { //** Reducer es una funcion que regresa siempre un state y este debe ser false(inicio) */

        const state = authReducer({ logged: false }, {}); //** El state en el aT debe ser el logged en false y le mandamos una accion objero vacio */
        expect(state).toEqual({ logged: false }); //** Lo que esperamos que retorne */
    })

    test('Debe de autenticar y colocar el name del usuario', () => {

        const action = { //** Accion que va a ser igual a un objeto */
            type: types.login, //** Dentro tiene el type de types/types(importado) con el login para ingresar */
            payload: { //** En el Payload vamos a tener un nombre que va a ser pedro */
                name: 'Pedro'
            }
        }

        const state = authReducer({ logged: false }, action); //** El state que tendra el aR del estado inicial y este va a recibir un action l15 */

        expect( state ).toEqual({ //** El state debe ser igual a este objeto */
            logged: true, //** El action debio de cambiar el logged a true */
            name: 'Pedro' //** Debio asignar este nombre l18 */
        });
    })

    test('Debe de borrar el nae del usuario y logged en false', () => {
        //** La accion aqui va a ser logout, el payload no va a llevar naday el estado va a ser true y el name en Juan y al mandar esa accion el state sea false, para que no tenga el usuario (198-4:16) */

        const action = {
            type: types.logout
        }

        const state = authReducer({ logged: true, name: 'Juan' }, action);
        expect( state ).toEqual({ logged: false });
    })
})