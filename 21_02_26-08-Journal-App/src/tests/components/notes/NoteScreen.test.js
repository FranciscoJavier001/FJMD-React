//** Esto lo copie de AppRouter.test.js */
import React from 'react' //** Por que voy a utilizar JSX */
import { mount } from 'enzyme' //** Recuerda para usar el mount */
import { Provider } from 'react-redux'

import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk'

import '@testing-library/jest-dom'
import { activeNote } from '../../../actions/notes'
import { NoteScreen } from '../../../components/notes/NoteScreen'

//** Aqui voy a fingir el activeNote */
jest.mock('../../../actions/notes', () => ({
    activeNote: jest.fn(),
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
        active: { //** Con la nota activa voy a poner un objeto que tenga un id(aleatorio), el tittle, body, date (no importa mucho) */
            id: 1234,
            title: 'Hola',
            body: 'Mundo',
            date: 0
        }, 
        notes: [] //** La nota la voy a dejar vacia */
    }
}

//** Voy a crear un store que es un objeto */
let store = mockStore(initState)
store.dispatch = jest.fn() //** Asi vamos a evaluar como son llamadas las funciones, osea vamos a reemplazar la funcion que tenga el store por una funcion jest la cual si voy a poder evaluar y voy a tener control absoluto sobre la funcion */

const wrapper = mount( //** Voy a ocupar renderizar mas cosas */
    <Provider store={ store }> {/* Aqui voy a proveer el store que va a ser igual sl store del mockStore que se creo en la arriba en la linea 18 */}
        <NoteScreen /> 
    </Provider>
)

describe('Pruebas en <NoteScreen />', () => {
    
    test('debe de mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot()
    })

    //** Cuando cabia algo en la caja de texto, se usa el efecto y cambia el activeNote, osea para hacer la prueba voy a modificar una caja de texto y esto se debe de disparar con esos argumentos */
    test('debe de disparar el active note', () => {
        
        wrapper.find('input[name="title"]').simulate('change', { //** Como lo tengo en el textArea puedo especificarlo entre llaves cuadradas y entre doble comillas la que quiera, esto esta en la linea 59 del notesScreen, voy a llamarlo con la simulaion change, le pongo "," y este tiene su target y este tiene el name que va a ser el title y el title que puede ser lo que sea, con esto hago el cambio en la caja de texto */
            target: {
                name: 'title',
                value: 'Hola de nuevo'
            }
        })

        //** Ahora me toca ver si fue llamado */
        expect( activeNote ).toHaveBeenLastCalledWith(
            1234, //** Un id Cualquiera */
            { //** Un id que tenga el body, title, id, date, estos de manera aleatoria */
                body: 'Mundo',
                title: 'Hola de nuevo',
                id: 1234,
                date: 0
            }
        )
    })
})
