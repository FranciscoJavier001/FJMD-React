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
import { AppRouter } from '../../router/AppRouter';

const middlewares = [ thunk ] //** Funcion que se invoca despues de que se envia una accion, puede modificarla, esperar que termine o cancelarla */
const mockStore = configureStore( middlewares ) //** MockStore es un objero que simula ser otro y el store configura funciones de los moddleware */

// store.dispatch = jest.fn() //** Puedo saber con que argumento se utilizo para llamar el dispatch, por eso lo manejo con un mock */


describe('Pruebas en <AppRouter />', () => {
    
    test('debe de mosrar el espere...', () => {

        const initState = { //** Configuro el iS, que asi quiero cuando inicie las pruebas */
            auth: { //** Falla, no puede desestructirar el checking */
                checking: true
            }
        }
        
        const store = mockStore( initState ) //** Este va con el berofeEach para inicializar todas las acciones que este store haya ejecutado */
        
        const wrapper = mount( //** Dentro necesito el componente llamado Provider */
            <Provider store={ store }> {/* Esto me va a proveer el store, pero debo de crearlo, dentro mando el store creado anteriormente */}
                <AppRouter /> {/* Dentro de este HOC voy a colocar el evento a analizar */}
            </Provider>
        )

        // expect( wrapper ).toMatchSnapshot()
        expect( wrapper.find('h5').exists() ).toBe(true) //** Busca un h5 y si existe pasa la prueba */
    })
    
})
