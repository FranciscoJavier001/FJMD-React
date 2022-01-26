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
    
    test('debe de mostrar el espere...', () => {

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

    test('debe de mostrar la ruta publica', () => {

        const initState = { //** Configuro el iS, que asi quiero cuando inicie las pruebas */
            auth: { //** Falla, no puede desestructirar el checking */
                checking: false, //** Lo pongo en false, porque ya paso el espere */
                uid: null //** Porque el usuario no esta autentificado */
            }
        }

        const store = mockStore( initState ) //** Este va con el berofeEach para inicializar todas las acciones que este store haya ejecutado */
        
        const wrapper = mount( //** Dentro necesito el componente llamado Provider */
            <Provider store={ store }> {/* Esto me va a proveer el store, pero debo de crearlo, dentro mando el store creado anteriormente */}
                <AppRouter /> {/* Dentro de este HOC voy a colocar el evento a analizar */}
            </Provider>
        )

        expect( wrapper ).toMatchSnapshot() //** Voy a esperar que haga match con el snapshot */
        expect( wrapper.find('.login-container').exists() ).toBe(true) //** Busca un login-container(LoginScreen) y si existe pasa la prueba */
    })

    test('debe de mostrar la ruta privada', () => {

        const initState = { //** Configuro el iS, que asi quiero cuando inicie las pruebas */
            calendar: { //** No podia desestructurar las propiedades de los events, asi que lo proveo aqui como un arreglo vacio*/
                events: []
            },
            ui: {//** Proveer el modalOpen, lo pongo en falso, porque aqui ya entro */
                modalOpen: false 
            },
            auth: { //** Falla, no puede desestructirar el checking */
                checking: false, //** Lo pongo en false, porque ya paso el espere */
                uid: '123', //** Existe porque el usuario esta autentificado */
                name: 'Juan Carlos' //** Porque debe de venir el nombre */
            }
        }

        const store = mockStore( initState ) //** Este va con el berofeEach para inicializar todas las acciones que este store haya ejecutado */
        
        const wrapper = mount( //** Dentro necesito el componente llamado Provider */
            <Provider store={ store }> {/* Esto me va a proveer el store, pero debo de crearlo, dentro mando el store creado anteriormente */}
                <AppRouter /> {/* Dentro de este HOC voy a colocar el evento a analizar */}
            </Provider>
        )

        expect( wrapper ).toMatchSnapshot() //** Voy a esperar que haga match con el snapshot */
        expect( wrapper.find('.calendar-screen').exists() ).toBe(true) //** Busca un calendar-screen(CalendarScreen) y si existe pasa la prueba */
    })
    
})
