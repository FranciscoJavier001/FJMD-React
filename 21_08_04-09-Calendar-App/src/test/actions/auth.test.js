//**_______________________________________________________________________________________________________________________________________________*/
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk' //** La de arriba ocupa esta porque las acciones retornan una funcion */
import Swal from 'sweetalert2' //** La importo porque de aqui voy a sacar el error */

import '@testing-library/jest-dom' //** Ayuda del tipado */

import { startLogin, startRegister } from '../../actions/auth'
import { types } from '../../types/types'
import * as fetchModule from '../../helpers/fetch' //** Esta es nueva y es para hacer el mock de las acciones del fetch, ambas */

jest.mock( 'sweetalert2', () => ({ //** Mock de sa2, el mock es para decirle "cuando se llame", parentesis es para decirle que regresa un objeto */
    fire: jest.fn() //** Que funcion estoy esperando que se llame en este caso el fire, que debe ser un jest.fn() */
})) 

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

    test('startLogin incorrecto', async() => { //** Con un login incorrecto */
        
        await store.dispatch( startLogin('francisco@mail.com', '123456789') ) //** Lo que vamos a mandar en el startLogin */
        let actions = store.getActions() //** Estas son un objeto vacio, porque no se disparo nada porque esta mal el password, let por reasignar */

        // console.log(actions);

        expect( actions ).toEqual([]) //** Voy a esperar recibir un objeto vacio, porque no pudo ingresar */

        //** Voy a preguntar si el sa2 se ha llamado, el with es para mostrar en consola los errores con los que se ha llamado */
        expect( Swal.fire ).toHaveBeenCalledWith( "Error", "Password incorrecto", "error" ) //** Asi se llamo y es con el password incorrecto */

        //** Ahora toca con el email incorrecto */
        await store.dispatch( startLogin('francisco1@mail.com', '123456') ) //** Lo que vamos a mandar en el startLogin */
        actions = store.getActions() //** Estas son un objeto vacio, porque no se disparo nada porque esta mal el password */

        // console.log(actions);

        //** Se llamo y es con el email incorrecto */
        expect( Swal.fire ).toHaveBeenCalledWith( "Error", "El usuario no existe con ese email", "error" ) 
    })

    test('startRegister correcto', async() => {

        fetchModule.fetchSinToken = jest.fn(() => ({ //** Importacion linea 10, voy a utilizar el fST y va a ser igual a una funcion jest */
            json() {  //** Voy a regresar un nuevo objeto, que tiene un metodo llamado json que va a llamar */
                return { //** Definimos lo que va  hacer, ya se disparo la accion del login y el payload son los argumentos */
                    ok: true,
                    uid: '123',
                    name: 'Carlos',
                    token: 'ABC123ABC123'
                } 
            }
        })) 
        
        await store.dispatch( startRegister('test2@mail.com', '123456', 'Test') ) //** Dispara en store startRegister pide email, password y name */

        const actions = store.getActions() //** Guarda las acciones del store en la variable actions */

        // console.log(actions); //** Si el usuario es nuevo, salen cosas, sino se manda arreglo vacio */

        expect( actions[0] ).toEqual({ //** Espero que los actions en la primera posicion sean igual a un objeto */
             type: types.authLogin, //** Que va a tener su type, de authLogin, su payload con los argumentos que pusumos en la linea 78 */
             payload: {
                 uid: '123',
                 name: 'Carlos'
             }
        })

        //** Espero que lS tambien se haya llamado, para ver si funciono el test */
        expect( localStorage.setItem ).toHaveBeenCalledWith( 'token', 'ABC123ABC123' ) //** El lS se haya llamado con token definido aqui, mock */
        expect( localStorage.setItem ).toHaveBeenCalledWith( 'token-init-date', expect.any(Number) ) //** El lS se haya llamado con t-i-d(Number) */

    })
    
})