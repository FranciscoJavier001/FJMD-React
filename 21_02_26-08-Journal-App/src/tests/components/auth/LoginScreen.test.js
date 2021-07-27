import React from 'react' //** Por que voy a utilizar JSX */
import { mount } from 'enzyme' //** Recuerda para usar el mount */
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom' //** Este me va a permitir definir las rutas, como estuviera navegando en las rutas, pero aqui adento */

import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk'

import '@testing-library/jest-dom'

import { LoginScreen } from "../../../components/auth/LoginScreen"
import { startGoogleLogin } from '../../../actions/auth'

//** Voy a aplicar un mock a la funcion para saber si se llamo o no, y en esta funcion de flecha voy a regresar un objeto y dentro voy a tener el startGoogleLogin */
jest.mock('../../../actions/auth', () => ({
    startGoogleLogin: jest.fn() //** Que esto no es mas que un jest.fn() */
}))


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
store.dispatch = jest.fn //** Asi vamos a evaluar como son llamadas las funciones, osea vamos a reemplazar la funcion que tenga el store por una funcion jest la cual si voy a poder evaluar y voy a tener control absoluto sobre la funcion */

const wrapper = mount( //** Voy a ocupar renderizar mas cosas */
    <Provider store={ store }> {/* Aqui voy a proveer el store que va a ser igual sl store del mockStore que se creo en la arriba en la linea 18 */}
        <MemoryRouter>
            <LoginScreen /> 
        </MemoryRouter>
    </Provider>
)

describe('Pruebas en LoginScreen />', () => {

    //** Esto es para hacer una limpieza, es decir lo va a reinicializar por si ocupo hacer mas pruebas en el store */
    beforeEach(()=>{
        store = mockStore(initState) //** El store va a ser igual al createMockStore */
        jest.clearAllMocks() //** Es buena practica limpiar el mook, para reestablecer cada uno de los valores */
    })
    
    test('debe de mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot(); 
    })

    test('debe de disparar la accion de startGoogleLogin', () => {
        
        //** Asi es para simular un click, y su propiedad es handleGoogleLogin, para eso uso el prop, y puedo hacer ua eferencia a la funcion */
        wrapper.find('.google-btn').prop('onClick')()

        //** Yo esperaria que esta funcion haya sido llamada */
        expect( startGoogleLogin ).toHaveBeenCalled()
    })
    
    
})