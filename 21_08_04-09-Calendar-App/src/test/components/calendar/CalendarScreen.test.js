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
import { act } from '@testing-library/react'

import '@testing-library/jest-dom' //** Ayuda con el tipado */

import { CalendarScreen } from '../../../components/calendar/CalendarScreen';
import { messages } from '../../../helpers/calendar-messages-es' //** Debia extraer los messages, vienen en un objeto */
import { types } from '../../../types/types';
import { eventSetActive } from '../../../actions/events';

jest.mock('../../../actions/events', () => ({ //** Mock de la funcion eventSetActive */
    eventSetActive: jest.fn(),
    eventStartLoading: jest.fn() //** ypeError: (0 , _events.eventStartLoading) is not a function - Asi evito esta falla */
}))
Storage.prototype.setItem = jest.fn() //** Esto es el mock para el expect de la linea 79 */

const middlewares = [ thunk ] //** Funcion que se invoca despues de que se envia una accion, puede modificarla, esperar que termine o cancelarla */
const mockStore = configureStore( middlewares ) //** MockStore es un objero que simula ser otro y el store configura funciones de los moddleware */

const initState = { //** Configuro el iS, que asi quiero cuando inicie las pruebas */
    calendar: { //** De donde vengan las fallas fijate en Redux>State y del componente principal las vas poniendo, del useSelector */
        events: []
    },
    auth: {
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

    test('pruebas con las interacciones del calendario', () => {
        
        const calendar = wrapper.find('Calendar') //** Es la referencia al calendario */
        // console.log(calendar.exists()); //** Asi veo que existe porque me mando true */
        
        const calendarMessages = calendar.prop('messages') //** Quiero asegurarme que tenga los mensajes, (son la traduccion) */
        // console.log(calendarMessages);
        expect( calendarMessages ).toEqual( messages ) 

        calendar.prop('onDoubleClickEvent')() //** La propiedad que quiero tomar y el evento que se va a disparar, calendar es por la linea 60 */
        //** Pregunto que se disparo en el store, que sea llamado con la info que dispara hasta que el final que esta en types */
        expect( store.dispatch ).toHaveBeenCalledWith({ type: types.uiOpenModal })

        calendar.prop('onSelectEvent')({ start: 'Hola' }) //** Propiedad a evaluar, y el evento que recibe */
        expect( eventSetActive ).toHaveBeenCalledWith({ start: 'Hola' }) //** Que recibio y con que fue llamado el dispatch */

        act(() => { //** act hace una modifiacion en el setState */
        calendar.prop('onView')('week') //** La disparo mandando la vista de week */
        //** Que haya sido grabado en el lS, ocupo hacer el mock, y que el lastView sea llamado con la week(semana - es el e) */
        expect( localStorage.setItem ).toHaveBeenCalledWith('lastView', 'week') 
        })
    })
})