import React from 'react'
import { mount, shallow } from 'enzyme'
import { AppRouter } from '../../routers/AppRouter'
import { AuthContext } from '../../auth/AuthContext'

describe('Pruebas en <AppRouter/>', () => {
    
    test('Debe de mostrar login si no está autenticado', () => {

        // Aqui hay que Proveer lo que tenia el Context, que es el user y el dispatch
        const contextValue = { //** Este va a ser la simulacion del objeto que definimos abajo, en el provider */
            dispatch: jest.fn(), //** Cuando queremos provar funciones lo mejor que podemos hacer es usar jest.fn() */
            user: {
                logged: false //** Va a tener el logged en false por defecto, osea el estado inicial de la ruta */
            }
        }
        
        const wrapper = mount( //** Asi renderizamos componentes, y hay que vereficar si recibe algun argumento */
            // Hay que importar el AuthContext.Provider para que se pueda hacer la desestructuracion de user y no nos maque error
            // Otra cosa, el Context es un HighOrderComponent, osea que ya tenemos una estructura que se parece muchisimo a las pruebas que ya hemos echo antes en el PrivateRoute, asi que no me va a servir con el shallow, voy a tener que usar el mount
            // El contextValue lo voy a mandar al Provider
            <AuthContext.Provider value={ contextValue }>
                <AppRouter />
            </AuthContext.Provider>
        );

        expect( wrapper ).toMatchSnapshot();

        // console.log( wrapper.html());
    });

    test('Debe de mostrar el componente de Marvel si esta autenticado', () => {
        
        //** Voy a copiar y pegar la linea de arriba */

        const contextValue = {
            dispatch: jest.fn(),
            user: { //** Con esto vemos que ya este autentificado */
                logged: true,
                name: 'Antonio'
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <AppRouter />
            </AuthContext.Provider>
        );

        expect( wrapper.find('.navbar').exists() ).toBe(true); //** Aqui esperamos que una clase este en true, ya que si no esta autentificado solo se muestra el loggin */
        // console.log(wrapper.html() );

    })
    
    
})
