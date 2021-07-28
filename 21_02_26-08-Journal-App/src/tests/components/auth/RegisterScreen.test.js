import React from 'react' //** Por que voy a utilizar JSX */
import { mount } from 'enzyme' //** Recuerda para usar el mount */
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom' //** Este me va a permitir definir las rutas, como estuviera navegando en las rutas, pero aqui adento */

import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk'

import '@testing-library/jest-dom'
import { RegisterScreen } from '../../../components/auth/RegisterScreen'
import { types } from '../../../types/types'

//** Voy a aplicar un mock a la funcion para saber si se llamo o no, y en esta funcion de flecha voy a regresar un objeto y dentro voy a tener el startGoogleLogin */
// jest.mock('../../../actions/auth', () => ({
//     startGoogleLogin: jest.fn(), //** Que esto no es mas que un jest.fn() */
//     startLoginEmailPassword: jest.fn() //** Que esto no es mas que un jest.fn() */
// }))


/** Crea los middleware, configura el mockStore */
const middlewares = [thunk] //** thunk es el middleware */
const mockStore = configureStore(middlewares)

const initState = { //** Este contiene el estado del store en este momento, pero lo vamos a desestructurar */
    auth: {}, //** Lo voy a tener como un objeto vacio */
    ui: { //** Y este es como lo voy a tener en el estado inicial del test */
        loading: false,
        msgError: null
    }
}

/** Voy a crear un store que es un objeto */
let store = mockStore(initState)
// store.dispatch = jest.fn //** Aqui no voy a simular el dispatch, aqui si necesito que lo haga correctamente, esto lo hago por el segundo test */

const wrapper = mount( //** Voy a ocupar renderizar mas cosas */
    <Provider store={ store }> {/* Aqui voy a proveer el store que va a ser igual sl store del mockStore que se creo en la arriba en la linea 18 */}
        <MemoryRouter>
            <RegisterScreen /> 
        </MemoryRouter>
    </Provider>
)

describe('Pruebas en el RegisterScreen', () => {

    test('debe de mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot()
    })
    
    test('debe de hacer el dispatch de la accion respectiva', () => {
        
        const emailField = wrapper.find('input[name="email"]') //** Asi tomamos un campo */
        // console.log(emailField.exists); //** Para comprobar que exista */

        emailField.simulate('change', { //** Aqui voy a simular un cambio en el emailField, y para el cambio voy a trabajar con el customHook y necesita que le mandemos el target y el value -- "Esto modifica el customHook"*/
            target: { //** Esto es lo que va a necesitar, definido en la linea de arriba */
                value: '',
                name: 'email'
            }
        })

        //** Vamos a disparar la respectiva accion, cuando borramos la caja de email, aqui pusimos las instrucciones de la simulacion y el preventDefault es para evitar el error */
        wrapper.find('form').simulate('submit', {
            preventDefault(){}
        })

        //** Esto es para mirar las acciones */
        const actions = store.getActions() //** Al parecer las acciones se quedan en el store, todas las acciones disparadas, quite el store.dispatch porque necesitaba que si se ejecutaran de manera correcta */
        // console.log(actions);

        expect( actions[0] ).toEqual({ //** Esto lo encontramos en elactions>ui>(en la primera posicion) */
            type: types.uiSetError, //** Este esta definido en el ui, de actions, en la carpeta types(esta al final, pero ahi viene los errores que voy a lanzar) */
            payload: 'Email no valido' //** Este es el error que nos va a lanzar la accion, asi tal cual */
        })
    })
    
})
