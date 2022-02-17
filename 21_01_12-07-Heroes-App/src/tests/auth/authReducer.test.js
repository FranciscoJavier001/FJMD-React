import { authReducer } from "../../auth/authReducer"
import { types } from "../../types/types";

describe('Pruebas en authReducer', () => {

    test('Debe de retornar el estado por defecto', () => {
        //** Recuerda, un reducer es una simple funcion, por eso voy a poner una constante y este reducer regresa siempre un state, asi que lo importamos y el state lo hace mas sencillo y el estado inicial hace el logged en false y para la accion voy a mandarle un objeto vacio para que use el valor por defecto, y esperaria que el state fuera igual al estado inicial del logged en false (198-2:36) */

        const state = authReducer({ logged: false }, {});
        expect(state).toEqual({ logged: false });
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