//**_______________________________________________________________________________________________________________________________________________*/
import React from 'react';
// import { shallow} from 'enzyme' //** Se actualizo Enzyme */
import { mount } from 'enzyme'; //** Se actualizo Enzyme */
import { PrivateRoute } from '../../routers/PrivateRoute';
import { MemoryRouter } from 'react-router-dom';

describe('Pruebas en <PrivateRoute />', () => { //** </>=Para decir que es la prueba en un componente */

    const props = { //** props=Objeto, que va a tener estas propiedades/propertyes */
        location: { //** El las props, viene location, que tiene una propiedad de pathname */
            pathname: '/marvel' //** Como ya ingresamos, podemos ver que ya estamos en marvel */
        }
    }

    Storage.prototype.setItem = jest.fn(); //** Busco del Stroge.proptytypes.setItem ahora va a ser una funcion con jest */

    test('Debe de mostrar el componente si esta autenticado y guardar localStorage', () => {
        
        const wrapper = mount( //** Debo de usar mount, porque shallow solo renderiza el componente */
             <MemoryRouter> {/* Error con las rutas, asi que asi las puedo falsear */}
                <PrivateRoute //** Quiero renderizar este componente, tiene unos propstype, que son requeridos, y aqui se los voy a mandar */
                    isAutenticated={ true } //** Este lo marcamos como true, para ver el span */
                    //** <span>"Es un contenedor de texto en linea"</span> */
                    component={ () => <span>Listo!</span> } //** Este me pide que sea una funcion, asi que mando un span como una funcion */
                    { ...props } //** Marca falla por falta de pathname - las defino y se las mando con el operador spred l9 */
                />
            </MemoryRouter>
        );
        
        // console.log( "====" + wrapper.html() + "====" ); //** Redirect regresa un string vacio */
        // console.log( wrapper.html() ); //** Asi vemos lo que renderizo el componente "PrivateRoute" (el span) */
        
        expect( wrapper.find('span').exists() ).toBe(true); //** Analizo que el span exista */

        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/marvel') //** sI=funcion jest que pruebo, que haya sido llamada con lp/m */
    })

    test('Debe de bloquear el cmponente si no eta autenticado', () => {
        const wrapper = mount(
            <MemoryRouter> 
                <PrivateRoute 
                    isAutenticated={ false } 
                    component={ () => <span>Listo!</span> } 
                    { ...props } 
                />
            </MemoryRouter>
        );
        
        // console.log( wrapper.html() );
        expect( wrapper.find('span').exists() ).toBe(false); 

        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/marvel') 
    })
})