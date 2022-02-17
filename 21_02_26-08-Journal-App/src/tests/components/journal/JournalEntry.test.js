/** Esto lo copie de AppRouter.test.js */
import React from 'react' //** Por que voy a utilizar JSX */
import { mount } from 'enzyme' //** Recuerda para usar el mount */
import { Provider } from 'react-redux'

import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk'

import '@testing-library/jest-dom'

import { JournalEntry } from '../../../components/journal/JournalEntry'
import { activeNote } from '../../../actions/notes' //** Las estoy llamando de las acciones */

/** Crea los middleware, configura el mockStore */
const middlewares = [thunk] //** thunk es el middleware */
const mockStore = configureStore(middlewares)

const initState = {} //** Lo voy a dejar vacio, porque no lo ocupo, porque solo tengo el dispatch */

//** Voy a crear un store que es un objeto */
let store = mockStore(initState)
store.dispatch = jest.fn() //** Asi vamos a evaluar como son llamadas las funciones, osea vamos a reemplazar la funcion que tenga el store por una funcion jest la cual si voy a poder evaluar y voy a tener control absoluto sobre la funcion */

const nota = { //** Este es un features, es por los argumentos que recibe la funcion en la linea 6 de JournalEntry.js */
    id: 10,
    date: 0,
    title: 'Hola',
    body: 'Mundo',
    url: 'https://algunlugar.com/foto.jpg'
}

const wrapper = mount( //** Voy a ocupar renderizar mas cosas */
    <Provider store={ store }> {/* Aqui voy a proveer el store que va a ser igual sl store del mockStore que se creo en la arriba en la linea 18 */}
        <JournalEntry { ...nota}  />{/* Aqui voy a pasar los argumentos de la note, pero voy a usar la desestructuracion, con el spred para mandar todos sus argumentos */}
    </Provider>
)

describe('Pruebas en JournalEntries />', () => {

    test('debe de mostrarse correctamente', () => {
        
        expect( wrapper).toMatchSnapshot()
    })

    test('debe de activar la nota', () => { //** Voy a simular el click en el componente que es "journal__entry"-(lo voy a tomar por la clase) */
        
        wrapper.find('.journal__entry').prop('onClick')() //** Tengo que esperar que este se haya llamado, recuerda lo llame por la clase por el punto */

        expect( store.dispatch ).toHaveBeenCalledWith( //** Espero que el dispatch se haya llamado, lo cambie con el with y esta ya es una accion que retorna un objeto */
            activeNote( nota.id, {...nota} ) //** Se debe llamar con la nota que hice arriba, luego mando toda la nota pero desestructurada */
            )
    })
    
})