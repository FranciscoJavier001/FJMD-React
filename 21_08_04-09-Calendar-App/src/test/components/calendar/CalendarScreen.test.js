//**_______________________________________________________________________________________________________________________________________________*/
import Enzyme from 'enzyme'; //** Si no tengo estos me manda falla */
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'; //** Si no tengo estos me manda falla */
import {createSerializer} from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() }); //** Si no tengo estos me manda falla */
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux' //** Para utilizar el mount necesito un componente llamado Provider */

import configureStore from 'redux-mock-store' //** Para configurar el store */
import thunk from 'redux-thunk' //** La de arriba ocupa esta porque las acciones retornan una funcion */

import '@testing-library/jest-dom' //** Ayuda con el tipado */

import { CalendarScreen } from '../../../components/calendar/CalendarScreen';

//** Aplique un mock a la funcion, primero el path, cuando se llame voy a retornar un objeto y va a tener dentro el startLogin funcion jest */
// jest.mock('../../../', () => ({ 
// }))

const middlewares = [ thunk ] //** Funcion que se invoca despues de que se envia una accion, puede modificarla, esperar que termine o cancelarla */
const mockStore = configureStore( middlewares ) //** MockStore es un objero que simula ser otro y el store configura funciones de los moddleware */

const initState = { //** Configuro el iS, que asi quiero cuando inicie las pruebas */
    calendar: { //** De donde vengan las fallas fijate en Redux>State y del componente principal las vas poniendo, del useSelector */
        events: []
    },
    auth: {
        checking: false,
        uid: '123',
        name: 'Francisco'
    },
    ui: {
        modalOpen: false
    }
}

const store = mockStore( initState ) //** Este va con el berofeEach para inicializar todas las acciones que este store haya ejecutado */
store.dispatch = jest.fn() //** Puedo saber con que argumento se utilizo para llamar el dispatch, por eso lo manejo con un mock */

const wrapper = mount( //** Dentro necesito el componente llamado Provider */
    <Provider store={ store }> {/* Esto me va a proveer el store, pero debo de crearlo, dentro mando el store creado anteriormente */}
        <CalendarScreen />{/* Dentro de este HOC voy a colocar el evento a analizar */}
    </Provider>
)

describe('Pruebas en <CalendarScreen />', () => {
    
    test('debe de mostrarse correctamente', () => {
        
        expect ( wrapper ).toMatchSnapshot()
    })
    
})
