//** Esto lo copie de AppRouter.test.js */
import React from 'react' //** Por que voy a utilizar JSX */
import { mount } from 'enzyme' //** Recuerda para usar el mount */
import { Provider } from 'react-redux'

import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk'

import '@testing-library/jest-dom'
import { startNewNote } from '../../../actions/notes'
import { startLogout } from '../../../actions/auth'
import { Sidebar } from '../../../components/journal/Sidebar'

//** Voy a simular 2 acciones, con el mock, de igual manera debo de cambiar la funcion que quiero emular, eso se hace al principio de la funcion, en el segundo espacio */
jest.mock('../../../actions/notes', () => ({
    startNewNote: jest.fn(),
}))

jest.mock('../../../actions/auth', () => ({
    startLogout: jest.fn(),
}))

/** Crea los middleware, configura el mockStore */
const middlewares = [thunk] //** thunk es el middleware */
const mockStore = configureStore(middlewares)

const initState = { //** Este contiene el estado del store en este momento, pero lo vamos a desestructurar */
    auth: { //** Lo voy a tener como un objeto con los siguientes parametros */
        uid: '1',
        name: 'Frank'
    }, 
    ui: { //** Y este es como lo voy a tener en el estado inicial del test */
        loading: false,
        msgError: null
    },
    notes: { //** La activeNote(nota activa) la voy a dejar en null */
        active: null, 
        notes: [] //** La nota la voy a dejar vacia */
    }
}

//** Voy a crear un store que es un objeto */
let store = mockStore(initState)
store.dispatch = jest.fn() //** Asi vamos a evaluar como son llamadas las funciones, osea vamos a reemplazar la funcion que tenga el store por una funcion jest la cual si voy a poder evaluar y voy a tener control absoluto sobre la funcion */

const wrapper = mount( //** Voy a ocupar renderizar mas cosas */
    <Provider store={ store }> {/* Aqui voy a proveer el store que va a ser igual sl store del mockStore que se creo en la arriba en la linea 18 */}
        <Sidebar /> 
    </Provider>
)

describe('Pruebas en <Sidebar />', () => {
    
    test('Debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot()
    })

    test('Debe de llama el startLogout', () => { //** Para esto necesito emular el evento click del boton */
        //** Con el wrapper voy a buscar el boton con su propiedad onClick y voy a llamar la accion, osea el wrapper no ocupa siempre el expect, mas bien hay veces que solo lo puedo llamar porque si y listo */
        wrapper.find('button').prop('onClick')()

        //** Ahora voy a esperar que el startLogout haya sido llamado */
        expect( startLogout ).toHaveBeenCalled()
    })
    
    test('debe de llamar el startNewNote', () => {
        
        //** Aqui seria el wrapper con el find y que debe ser el className de la nueva entrada de la nota journal__new-entry, es el que diapara la creacion, este lo tomo por clase con la propiedad (individual) click y lo llamo */
        wrapper.find('.journal__new-entry').prop('onClick')()

        //** Esperaria que este haya sido llamado */
        expect( startNewNote ).toHaveBeenCalled()
    })
    
    
})
