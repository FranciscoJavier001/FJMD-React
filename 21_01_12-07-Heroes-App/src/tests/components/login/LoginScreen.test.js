import React from 'react'
import { mount } from 'enzyme'
import { LoginScreen } from '../../../components/login/LoginScreen'
import { AuthContext } from '../../../auth/AuthContext'
import { types } from '../../../types/types'

describe('Pruebas en <LoginScreen />', () => {

    //** Voy a crear tambien el objeto history que es lo que necesito enviarle y lo unico que necesito es la funcion del replace, osea que uso el jest.fn() */
    const history = {
        replace: jest.fn()
    }

    //** Necesito tabien el dispatch */
    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    }

    //** Que es lo que voy a renderizar */
    const wrapper = mount(
        //** Aqui necesito el LoginScreen */
        //** En el Provider voy a necesitar el valor del objeto y mando el contextValue */
        <AuthContext.Provider value={ contextValue }>
            {/* El LoginScreen recibe el history y se lo mando entre llaves */}
            <LoginScreen history={ history } />
        </AuthContext.Provider>
    )

    test('Debe de mostrarse correctamente', () => {
        

        expect( wrapper ).toMatchSnapshot()
    })

    test('Debe de realizar el dispatch y la navegacion', () => {
        
        //** Debo de simula las funciones del boton */
        //** Asi es como mando llamar al boton */
        wrapper.find('button').prop('onClick')()

        //** Ahora esperare que el contextValue = dispatch se haya llamado, y adentro ponemos con los objetos que fue llamado */
        expect( contextValue.dispatch ).toHaveBeenCalledWith({
            type: types.login,
            //** El payload va a ser un objeto que debe tener el name que es Francisco */
            payload: {
                name: 'Francisco'
            }
        })

        //** Tambien esperare que el replace haya sido llamado */

        expect( history.replace ).toHaveBeenCalled()
    })
    
    //** Debo de llamar al localStorage */
    test('Llamada al localStorage', () => {

        const handleClick = wrapper.find('button').prop('onClick')

        handleClick()

        expect( contextValue.dispatch ).toHaveBeenCalledWith({
            type: types.login,
            payload: {
                name: 'Francisco'
            }
        })

        expect( history.replace ).toHaveBeenCalledWith('/')

        //** Aqui grabe el localStorage */
        localStorage.setItem('lastPath', '/dc')
        handleClick()
        //** Esperare que esto haya sido llamado con /dc */
        expect( history.replace ).toHaveBeenCalledWith('/dc')
    })
})