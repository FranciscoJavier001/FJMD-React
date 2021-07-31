import React from 'react' //** Por que voy a utilizar JSX */
import { mount } from 'enzyme' //** Recuerda para usar el mount */
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom' //** Este me va a permitir definir las rutas, como estuviera navegando en las rutas, pero aqui adento */

import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk'

import '@testing-library/jest-dom'

import { firebase } from '../../firebase/firebase-config' //** Asi ya tengo el objeto para hacer la autentificacion */

import { login } from '../../actions/auth'
import { AppRouter } from '../../routers/AppRouter'
import { act } from '@testing-library/react';

//** Voy a aplicar un mock a la funcion para saber con que argumentos fue llamado */
jest.mock('../../actions/auth', () => ({
    login: jest.fn(), //** Este login lo estamos falseando con el mock */
}))

/** Crea los middleware, configura el mockStore */
const middlewares = [thunk] //** thunk es el middleware */
const mockStore = configureStore(middlewares)

const initState = { //** Este contiene el estado del store en este momento, pero lo vamos a desestructurar */
    auth: {}, //** Lo voy a tener como un objeto vacio */
    ui: { //** Y este es como lo voy a tener en el estado inicial del test */
        loading: false,
        msgError: null
    },
    notes: {
        active: { //** Este lo tengo en notes */
            id: 'ABC',
        },
        notes: [] //** Hay que confirmar que este al mismo nivel que el active */
    }
}

//** Voy a crear un store que es un objeto */
let store = mockStore(initState)
store.dispatch = jest.fn() //** Asi vamos a evaluar como son llamadas las funciones, osea vamos a reemplazar la funcion que tenga el store por una funcion jest la cual si voy a poder evaluar y voy a tener control absoluto sobre la funcion */

describe('Pruebas en <AppRoter />', () => {
    
    //** Estos van a ser varios procesos asyncronos */
    test('debe de llamar el login si estoy autentificado', async() => {

        let user;
        
        //** Que es un act, es "lo que sea que hagas, hazlo aqui adentro" */
        await act( async () => { //** "puse el await porque asi me lo recomendo" Esta la voy a poner como una funcion asuncrona porque quiero disparar la autentificacion de firebase, recuerda await porque es un funcion asyncrona */

            const userCred = await firebase.auth().signInWithEmailAndPassword('test@testing.com', '123456')
            user = userCred.user //** Aqui viene el serCredential, uid, display name y demas cosas */

            const wrapper = mount( //** Voy a ocupar renderizar mas cosas */
                <Provider store={ store }> {/* Aqui voy a proveer el store que va a ser igual sl store del mockStore que se creo en la arriba en la linea 18 */}
                    <MemoryRouter>
                    <AppRouter /> 
                    </MemoryRouter>
                </Provider>
            )
        })

        expect( login ).toHaveBeenCalledWith("Prjih2M8DyfPmtbSVyEx5OsepZG2", null) //** Esta funcion tuvo que haber sido llamada con un objeto vacio */
    })
    
})
