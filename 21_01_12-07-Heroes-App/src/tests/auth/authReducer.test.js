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
            payload: { //** El Payload es un objeto que va a tener dentro el name de Pedro */
                name: 'Pedro'
            }
        }

        const state = authReducer({ logged: false }, action); //** El state que tendra el aR del estado inicial y le mandamos el action l15 */

        expect( state ).toEqual({ //** El state debe ser igual a este objeto */
            logged: true, //** El action debio de cambiar el logged a true */
            name: 'Pedro' //** Debio asignar este nombre l18 */
        });
    })

    test('Debe de borrar el name del usuario y logged en false', () => { //** Debemos pasar el logged a false, porque salio el usuario */

        const action = { //** Definimos la accion que va a recibir el state, que es la salida del usuario */
            type: types.logout
        }

        const state = authReducer({ logged: true, name: 'Juan' }, action); //** Estado del aR es logged=true, y tiene un nombre definido */

        expect( state ).toEqual({ logged: false }); //** El estado debe ser logged=false, porque saco al usuario, sin name */
    })
})