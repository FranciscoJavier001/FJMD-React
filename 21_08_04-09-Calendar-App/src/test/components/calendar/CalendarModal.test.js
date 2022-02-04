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
import { eventStartUpdate, eventClearActiveEvent, eventStartAddNew } from '../../../actions/events'
import { act } from '@testing-library/react'
import Swal from 'sweetalert2';


jest.mock('../../../actions/events', () => ({ //** Mock de la funcion eventStartUpdate */
    eventStartUpdate: jest.fn(),
    eventClearActiveEvent: jest.fn(),
    eventStartAddNew: jest.fn()
}))

jest.mock('sweetalert2', () => ({ //** Mock de la funcion fire de SA2 */
    fire: jest.fn(),
}))

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

    beforeEach(() => {
        jest.clearAllMocks() 
    })
    
    test('debe de mostrar el modal', () => {
        
        // expect( wrapper.find('.modal').exists() ).toBe(true) //** Asi confirmo que el modal exosta */
        expect( wrapper.find('Modal').prop('isOpen') ).toBe(true) //** Busca el Modal, con la propiedad isOpen en true */
    })

    test('debe de llamar la accion de actualizar y cerrar modal', () => { //** Se hace sabiendo que accion hace el boton de handleSubmitForm */
        
        wrapper.find('form').simulate('submit', { //** Buscamos el form y le aplicamos el submit */
            preventDefault(){} //** Para evitar que se recarge el navegador */
        })

        //** Si el eventStartUpdate fue llamado entonces espero el initState.calendar.activeEvent, porque eso lo tengo en linea 34 */
        expect( eventStartUpdate ).toHaveBeenCalledWith( initState.calendar.activeEvent )
        
        expect( eventClearActiveEvent ).toHaveBeenCalled() //** Que haya sido llamado, y si lo vemos en CalendarModal no recibe nada */
    })

    test('debe de mostrar error si falta el titulo', () => {
        
        wrapper.find('form').simulate('submit', { //** Buscamos el form y le aplicamos el submit */
            preventDefault(){} //** Para evitar que se recarge el navegador */
        })

        //** Busco el input con el nombre title y este tiene que tener la clase de is-invalid */
        expect( wrapper.find('input[name="title"]').hasClass('is-invalid') ).toBe(true)
    })

    test('debe de crear un nuevo evento', () => {
        
        const initState = { //** Configuro el iS, que asi quiero cuando inicie las pruebas */
            calendar: { //** De donde vengan las fallas fijate en Redux>State y del componente principal las vas poniendo, del useSelector */
                events: [],
                activeEvent: null //** Lo inicializo en null */
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

        wrapper.find('input[name="title"]').simulate('change', { //** Esto va a disparar la modificacion del input */
            target: { //** El name es el campo, y el value es el valor que le voy a asignar ahora */
                name: 'title',
                value: 'Hola pruebas'
            }
        })

        wrapper.find('form').simulate('submit', { //** Buscamos el form y le aplicamos el submit, esperando que se dispare eventStartAddNew */
            preventDefault(){} //** Para evitar que se recarge el navegador */
        })

        expect( eventStartAddNew ).toHaveBeenCalledWith({ //** Esperamos que haya sido llamado con estos argumentos */
            end: expect.anything(),
            start: expect.anything(),
            title: "Hola pruebas",
            notes: ''
        })

        //** Como se actualizo el modal, debio tambien de llamar esta funcion eventClearActiveEvent */
        expect( eventClearActiveEvent ).toHaveBeenCalled()
    })

    test('debe de validar las fechas', () => {
        
        wrapper.find('input[name="title"]').simulate('change', { //** Esto va a disparar la modificacion del input */
            target: { //** El name es el campo, y el value es el valor que le voy a asignar ahora */
                name: 'title',
                value: 'Hola pruebas'
            }
        })

        const hoy = new Date() //** Creo una nueva instancia del tiempo */

        //** La fecha de finalizacion debe de ser mayor que la fecha de inicio */
        //** Busco el DateTimePicker de finalizacion, osea el 2, busco propiedad de onchange y dispara hoy */
        act (() => {
            wrapper.find('DateTimePicker').at(1).prop('onChange')(hoy)
        })

        wrapper.find('form').simulate('submit', { //** Buscamos el form y le aplicamos el submit, esperando que se dispare eventStartAddNew */
            preventDefault(){} //** Para evitar que se recarge el navegador */
        })

        //** Espero que Swal haya sido llamado porque las fechas no son iguales */
        expect( Swal.fire ).toHaveBeenCalledWith( "Error", "La fecha fin debe de ser mayor a la fecha de inicio", "error" )
    })  
})