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
import { LoginScreen } from '../../../components/auth/LoginScreen';
import { startLogin } from '../../../actions/auth';

//** Aplique un mock a la funcion, primero el path, cuando se llame voy a retornar un objeto y va a tener dentro el startLogin funcion jest */
jest.mock('../../../actions/auth', () => ({ 
    startLogin: jest.fn()
}))

const middlewares = [ thunk ] //** Funcion que se invoca despues de que se envia una accion, puede modificarla, esperar que termine o cancelarla */
const mockStore = configureStore( middlewares ) //** MockStore es un objero que simula ser otro y el store configura funciones de los moddleware */

const initState = {} //** Configuro el iS, que asi quiero cuando inicie las pruebas */
const store = mockStore( initState ) //** Este va con el berofeEach para inicializar todas las acciones que este store haya ejecutado */
store.dispatch = jest.fn() //** Puedo saber con que argumento se utilizo para llamar el dispatch, por eso lo manejo con un mock */

const wrapper = mount( //** Dentro necesito el componente llamado Provider */
    <Provider store={ store }> {/* Esto me va a proveer el store, pero debo de crearlo, dentro mando el store creado anteriormente */}
        <LoginScreen />{/* Dentro de este HOC voy a colocar el evento a analizar */}
    </Provider>
)

describe('Pruebas en <LoginScreen />', () => {
    
    test('debe mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot()
    })

    test('debe de llamar el dispatch del login', () => {
        
        wrapper.find('input[name="lEmail"]').simulate('change', { //** Busco los imputs y este lEmail voy a simular el cambio */
        target: { //** Abajo tiene el target, tiene el lEmail(campo) y el value, es el valor que le damos */
            name: 'lEmail',
            value: 'juan@mail.com'
            }
        })

        wrapper.find('input[name="lPassword"]').simulate('change', { //** Busco los imputs y este lEmail voy a simular el cambio */
        target: { //** Abajo tiene el target, tiene el lEmail(campo) y el value, es el valor que le damos */
            name: 'lPassword',
            value: '123456'
            }
        })

        //** Simulacion del formulario */
        wrapper.find('form').at(0).prop('onSubmit')({ //** Busco el primer formulario y la propiedad onSubmit */
        preventDefault(){} //** Llamo funcion mandando el evento que tiene el preventDefault de esa forma */
        })

        //** Voy a esperar que startLogin haya sido llamado con usuario y password */
        expect( startLogin ).toHaveBeenCalledWith('juan@mail.com', '123456') 
    })
    
})