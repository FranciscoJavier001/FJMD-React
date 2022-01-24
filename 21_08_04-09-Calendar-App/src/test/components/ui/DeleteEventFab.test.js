//**_______________________________________________________________________________________________________________________________________________*/
import Enzyme from 'enzyme'; //** Si no tengo estos me manda falla */
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'; //** Si no tengo estos me manda falla */

Enzyme.configure({ adapter: new Adapter() }); //** Si no tengo estos me manda falla */

import React from 'react' //** Uso React porque voy a renderizar un componente */
import { mount } from 'enzyme'
import { Provider } from 'react-redux' //** Para utilizar el mount necesito un componente llamado Provider */

import configureStore from 'redux-mock-store' //** Para configurar el store */
import thunk from 'redux-thunk' //** La de arriba ocupa esta porque las acciones retornan una funcion */

import '@testing-library/jest-dom' //** Ayuda con el tipado */
import { DeleteEventFab } from '../../../components/ui/DeleteEventFab'

const middlewares = [ thunk ] //** Funcion que se invoca despues de que se envia una accion, puede modificarla, esperar que termine o cancelarla */
const mockStore = configureStore( middlewares ) //** MockStore es un objero que simula ser otro y el store configura funciones de los moddleware */

const initState = {} //** Configuro el iS, que asi quiero cuando inicie las pruebas */
const store = mockStore( initState ) //** Este va con el berofeEach para inicializar todas las acciones que este store haya ejecutado */
store.dispatch = jest.fn() //** Puedo saber con que argumento se utilizo para llamar el dispatch, por eso lo manejo con un mock */

const wrapper = mount( //** Dentro necesito el componente llamado Provider */
    <Provider store={ store }> {/* Esto me va a proveer el store, pero debo de crearlo, dentro mando el store creado anteriormente */}
        <DeleteEventFab />{/* Dentro de este HOC voy a colocar el evento a analizar */}
    </Provider>
)

describe('Pruebas en <DeleteEventFab />', () => {
    
    test('debe de mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot() //** Para que haga match con el snapshot */
    })
})