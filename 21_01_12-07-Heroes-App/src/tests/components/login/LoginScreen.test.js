//**_______________________________________________________________________________________________________________________________________________*/
import React from 'react'
import { mount } from 'enzyme'
import { LoginScreen } from '../../../components/login/LoginScreen'
import { AuthContext } from '../../../auth/AuthContext'
import { types } from '../../../types/types'

describe('Pruebas en <LoginScreen />', () => {

    const history = { //** LoginScreen, recibe el history, debo de mandarlo y aqui lo defino src/components/login/LoginScreen L6 */
        replace: jest.fn() //** Esta funcion la pide en src/components/login/LoginScreen L25 */
    }

    const contextValue = { //** Me pide el {d}=uC(AC), asi que voy a darle el contexto */
        dispatch: jest.fn(), //** Dispatch, es una funcion, asi que la falseo */
    }

    const wrapper = mount( //** Al pasarle contexto, uso el mount */
        <AuthContext.Provider value={ contextValue }> {/* AC.P v={cV} - Le paso el contexto que cree arriba */}
            <LoginScreen history={ history } /> {/* Renderizo src/components/login/LoginScreen L6 pide history y mandamos el history de aqui L10 */}
        </AuthContext.Provider>
    )

    test('Debe de mostrarse correctamente', () => { //** Solo hago el match con el snapshot */
        
        expect( wrapper ).toMatchSnapshot()
    })

    test('Debe de realizar el dispatch y la navegacion', () => {
        
        wrapper.find('button').prop('onClick')() //** Voy a buscar el boton con la propiedad onClick */

        expect( contextValue.dispatch ).toHaveBeenCalledWith({ //** Hago la llamada con el context.dispatch(LoginScreen)L18 para saber su llamada */
            type: types.login, //** Le paso este estado del types, para autentificarme, asi me lo pide */
            payload: { //** La info que viene dentro que solicita */
                name: 'Francisco'
            }
        })

        expect( history.replace ).toHaveBeenCalled() //** Esperamos que haya sido llamado el replace que defini aqui L10 */
    })
    
    test('Llamada al localStorage', () => {

        const handleClick = wrapper.find('button').prop('onClick') //** Hago el llamado a la funcion y busco la propiedad oC del Boton */

        handleClick() //** Hago la llamada a la funcion, la defini arriba L45 */

        expect( contextValue.dispatch ).toHaveBeenCalledWith({ //** Lo pide el LS, con estos argumentos */
            type: types.login,
            payload: {
                name: 'Francisco'
            }
        })

        expect( history.replace ).toHaveBeenCalledWith('/') //** Esperamos que el replace haya sido llamado con ese argumento */

        localStorage.setItem('lastPath', '/dc') //** Asi grabo algo en el lS */

        handleClick() //** Hacemos una llamada a la funcion */

        expect( history.replace ).toHaveBeenCalledWith('/dc') //** Ahora le decimos al lS que haya sido llamado con dc con argumentos L58 */
    })
})