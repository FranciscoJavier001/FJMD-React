import React from 'react' //** Por que voy a utilizar JSX */
import { mount } from 'enzyme' //** Recuerda para usar el mount */
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom' //** Este me va a permitir definir las rutas, como estuviera navegando en las rutas, pero aqui adento */

import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk'

import '@testing-library/jest-dom'

import { LoginScreen } from "../../../components/auth/LoginScreen"

/** Crea los middleware, configura el mockStore */
const middlewares = [thunk] //** thunk es el middleware */
const mockStore = configureStore(middlewares)

const initState = { //** Este contiene el estado del store en este momento, pero lo vamos a desestructurar */
    auth: {}, //** Lo voy a tener como un objeto vacio */
    ui: { //** Y este es como lo voy a tener en el estado inicial del test */
        loading: false,
        msgError: null
    }
}

//** Voy a crear un store que es un objeto */
let store = mockStore(initState)

const wrapper = mount( //** Voy a ocupar renderizar mas cosas */
        <MemoryRouter>
            <Provider store={ store }> {/* Aqui voy a proveer el store que va a ser igual sl store del mockStore que se creo en la arriba en la linea 18 */}
                <LoginScreen /> 
            </Provider>
        </MemoryRouter>
)

describe('Pruebas en LoginScreen />', () => {

    //** Esto es para hacer una limpieza, es decir lo va a reinicializar por si ocupo hacer mas pruebas en el store */
    beforeEach(()=>{
        store = mockStore(initState) //** El store va a ser igual al createMockStore */
    })
    
    test('debe de mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot(); 
    })
    
})