//**_______________________________________________________________________________________________________________________________________________*/
import { authReducer } from "../../auth/authReducer"
import { types } from "../../types/types";

describe('Pruebas en authReducer', () => {

    test('Debe de retornar el estado por defecto', () => { //** Reducer es una funcion que regresa siempre un state y este debe ser false(inicio) */

        const state = authReducer({ logged: false }, {}); //** El state en el aT debe ser el logged en false y le mandamos una accion objero vacio */
        expect(state).toEqual({ logged: false }); //** Lo que esperamos que retorne */
    })

    test('Debe de autenticar y colocar el name del usuario', () => {
        //** Debo de crear la accion que va a ser igual a un objeto que va a tener el type y vamos a importar nuestros "tyes", el type que vamos a mandar va a ser un login, luego viene el payload que tiene que ser un objeto que va a tener solamente el name y ponemos cualquier nombre, esa es la accion y vamos a mandarlo al reducer, entonces vamos a esperar que el logged este en true y que el nombre sea el mismo que colocamos arriba (198-3:12) */

        const action = {
            type: types.login,
            payload: {
                name: 'Pedro'
            }
        }

        const state = authReducer({ logged: false }, action);
        expect( state ).toEqual({
            logged: true,
            name: 'Pedro'
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