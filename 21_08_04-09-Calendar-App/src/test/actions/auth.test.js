//**_______________________________________________________________________________________________________________________________________________*/
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk' //** La de arriba ocupa esta porque las acciones retornan una funcion */

import '@testing-library/jest-dom' //** Ayuda del tipado */

import { startLogin } from '../../actions/auth'
import { types } from '../../types/types'

const middlewares = [ thunk ] //** No recuerdo los middlewares */
const mockStore = configureStore( middlewares )

const initState = {} //** Configuro el iS, que asi quiero cuando inicie las pruebas */
let store = mockStore( initState ) //** Este va con el berofeEach para inicializar todas las acciones que este store haya ejecutado */

Storage.prototype.setItem = jest.fn() //** Mock del lS, y el jest es para probar funciones */
// localStorage.setItem //** Esta es la funcion que defini en la linea pasada 16 */

describe('Pruebas en las acciones Auth', () => {

    beforeEach(()=> { //** Asi lo estoy reinicializando en cada una de las peticiones */
        store = mockStore( initState )
        jest.clearAllMocks() //** Para que jest limpie los Mocks, despues de cada uso para que no lleven basura */
    })

    test('startLogin correcto', async() => { //** Esta es ua funcion que regresa una funcion, osea el thunk */
        
        await store.dispatch( startLogin( 'francisco@mail.com', '123456' ) ) //** dispatch de la accion startLogin, requiere email y password */

        const actions = store.getActions() //** Verifiquemos que acciones se dispararon (type, payload) */
        // console.log(actions);  //** acciones se dispararon (type, payload) */

        expect( actions[0] ).toEqual({ //** Vamos a evaluarlo contra el objeto de actions en posicion 0 */
            type: types.authLogin, //** Lleva dentro el types con auth y se dispara el login, aparte payload con uid y name */
            payload: {
                uid: expect.any(String), //** Asi esperamos que sea cualquier String */
                name: expect.any(String)
            }
        })

        expect( localStorage.setItem ).toHaveBeenCalledWith( 'token', expect.any(String) ) //** El lS se haya llamado con token(String) */
        expect( localStorage.setItem ).toHaveBeenCalledWith( 'token-init-date', expect.any(Number) ) //** El lS se haya llamado con t-i-d(Number) */

        // token = localStorage.setItem.mock.calls[0][1] //** Asi tengo el token */
        // console.log(localStorage.setItem.mock.calls[0][1]); //** Para saber que trae cuando es llamado que es token y t-i-d como arreglo */
    })
    
})
