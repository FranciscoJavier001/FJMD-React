//**_______________________________________________________________________________________________________________________________________________*/
import React from 'react'
import { mount, shallow } from 'enzyme'
import { AppRouter } from '../../routers/AppRouter'
import { AuthContext } from '../../auth/AuthContext' //** Lo importamos, para dar contesto y es un HOC */

describe('Pruebas en <AppRouter/>', () => {
    
    test('Debe de mostrar login si no está autenticado', () => {

        //** Esto solo es el Contexto de los parametros que recibe el AC.P - Lo encuentro en HeroesApp l25 */
        const contextValue = { //** {user} viene de uC(AC) - Uso cV, que es un objeto que voy a proveer igual dispatch, user y logged */
            dispatch: jest.fn(), //** Dispatch es una funcion que recibe argumentos, asi que lo pruebo con jest */
            user: { //** Necesito el user que tiene parametros como el logged */
                logged: false //** Solo muestro la pantalla de login, porque no esta autentificado */
            }
        }
        
        const wrapper = mount( //** Uso Mount, para poder montar el componente, y verificar los argumentos que recibe */
            <AuthContext.Provider value={ contextValue }> {/* AC.P necesita los valores de user, dispatch, definidos l12 en HeroesApp_l25  */}
                <AppRouter /> {/* Componente que se va a mostrar/renderizar */}
            </AuthContext.Provider>
        );

        expect( wrapper ).toMatchSnapshot(); //** Creamos el Snapshot, de que el usuario no esta autentificado */

        // console.log( wrapper.html() ); //** Marca error, porque el usuario esta en la pantalla de login */
    });

    test('Debe de mostrar el componente de Marvel si esta autenticado', () => {

        //** Igual, le damos contexto al test, pero con lo que necesita si esta autentificado */
        const contextValue = {
            dispatch: jest.fn(), //** Para probar la funcion del dispatch */
            user: { //** Estos parametros se necesitan al estar autentificados */
                logged: true,
                name: 'Antonio'
            }
        }

        const wrapper = mount( //** Ahora vamos a montar el componente */
            <AuthContext.Provider value={ contextValue }> {/* Los ocupo en HeroesApp_l25 */}
                <AppRouter />
            </AuthContext.Provider>
        );

        expect( wrapper.find('.navbar').exists() ).toBe(true); //** Debemos de mostrar la barra del Navbar, porque ya esta montada */
        // console.log(wrapper.html() ); //** Ya muestra como esta diseñada la Navbar */
    })  
})