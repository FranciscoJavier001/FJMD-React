import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk'

import '@testing-library/jest-dom'

import { login, logout, startLoginEmailPassword, startLogout } from "../../actions/auth"
import { types } from "../../types/types"

//** Crea los middleware, configura el mockStore */
const middlewares = [thunk] //** thunk es el middleware */
const mockStore = configureStore(middlewares)

const initState = {} //** Este contiene el estado del store en este momento, dentro voy a tener el auth, y dentro del objeto el uid */

//** Voy a crear un store que es un objeto */
let store = mockStore(initState)

describe('Pruebas con las acciones de Auth', () => {

    //** Esto es para hacer una limpieza, es decir lo va a reinicializar por si ocupo hacer mas pruebas en el store */
    beforeEach(()=>{
        store = mockStore(initState) //** El store va a ser igual al createMockStore */
    })
    
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

    test('debe de realizar el logout', async() => {
        
        await store.dispatch( startLogout() ) //** Voy a disparar la accion, y no recibe ningun argumento, pero como es una promesa debo de ponerle el async y el await, para esperar que se dispare todo esto */

        const actions = store.getActions() //** Esto lo hago para saber que es lo que tienen dentro, que es el Logout y el Logout Cleaning, de los types */
        // console.log(actions); 

        expect( actions[0]).toEqual({ //** Entonces voy a tomar las actions en su primera posicion que debe ser el Auth Logout */
            type: types.logout
        })

        expect( actions[1]).toEqual({ //** Entonces voy a tomar las actions en su primera posicion que debe ser el Auth Logout */
            type: types.notesLogoutCleaning
        })
    })

    test('debe de iniciar el startLoginEmailPassword', async () => {
        
        await store.dispatch( startLoginEmailPassword('test@testing.com', '123456') ) //** Es una promesa, espero que el store dispare startLoginEmailPassword, arriba el async porque es una promesa, en firebase pongo un usuario para hacer la prueba y listo */

        const actions = store.getActions() //** Voy a ver que acciones tiene este metodo */
        // console.log(actions);

        expect( actions[1]).toEqual({
            type: types.login,
            payload: {
                uid: 'Prjih2M8DyfPmtbSVyEx5OsepZG2',
                displayName: null
            }
        })
    })
    
    
})
