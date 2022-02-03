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
import moment from 'moment'
import 'jest-canvas-mock'; //** Lo importe para evitar la falla */

import '@testing-library/jest-dom' //** Ayuda con el tipado */

import { CalendarModal } from '../../../components/calendar/CalendarModal';

// jest.mock('../../../actions/events', () => ({ //** Mock de la funcion eventSetActive */
//     eventSetActive: jest.fn(),
//     eventStartLoading: jest.fn() //** ypeError: (0 , _events.eventStartLoading) is not a function - Asi evito esta falla */
// }))

const middlewares = [ thunk ] //** Funcion que se invoca despues de que se envia una accion, puede modificarla, esperar que termine o cancelarla */
const mockStore = configureStore( middlewares ) //** MockStore es un objero que simula ser otro y el store configura funciones de los moddleware */

const now = moment().minutes(0).seconds(0).add(1,'hours'); //** Definir valor inicial en moment, momento actual, seg/min en 0 */
const nowPlus1 = now.clone().add(1, 'hours'); //** Este va a ser una hora superior, para el campo del fin */

const initState = { //** Configuro el iS, que asi quiero cuando inicie las pruebas */
    calendar: { //** De donde vengan las fallas fijate en Redux>State y del componente principal las vas poniendo, del useSelector */
        events: [],
        activeEvent: { //** Para decir que tengo un evento activo, va a ser un objeto que tenga */
            title: 'Hola Mundo', //** Title, notes, start, end */
            notes: 'Algunas notas',
            start: now.toDate(),
            end: nowPlus1.toDate() 
        }
    },
    auth: {
        uid: '123',
        name: 'Francisco'
    },
    ui: {
        modalOpen: true
    }
}

const store = mockStore( initState ) //** Este va con el berofeEach para inicializar todas las acciones que este store haya ejecutado */
store.dispatch = jest.fn() //** Puedo saber con que argumento se utilizo para llamar el dispatch, por eso lo manejo con un mock */

const wrapper = mount( //** Dentro necesito el componente llamado Provider */
    <Provider store={ store }> {/* Esto me va a proveer el store, pero debo de crearlo, dentro mando el store creado anteriormente */}
        <CalendarModal />{/* Dentro de este HOC voy a colocar el evento a analizar */}
    </Provider>
)

describe('Pruebas en <CalendarModal />', () => {
    
    test('debe de mostrar el modal', () => {
        
        // expect( wrapper.find('.modal').exists() ).toBe(true) //** Asi confirmo que el modal exosta */
        expect( wrapper.find('Modal').prop('isOpen') ).toBe(true) //** Busca el Modal, con la propiedad isOpen en true */
    })  
})