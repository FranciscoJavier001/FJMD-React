import React from 'react';
// import { shallow} from 'enzyme'
import { mount } from 'enzyme';
import { PrivateRoute } from '../../routers/PrivateRoute';
import { MemoryRouter } from 'react-router-dom';

describe('Pruebas en <PrivateRoute />', () => {

    const props = { //** Voy a crearme otra propiedad que puede ser que la necesite, puede ser argumento o propertyes, que va a ser un nuevo argumento al PrivateRoute que esta abajo, porque el objeto del rest.location.pathname viene en el rest, de igual manera, estas props tambien se las voy a mandar al PrivateRoute con el operador spreed */
        location: { 
            pathname: '/marvel' //** Voy a inventarme el location, luego viene el pathname y el path que quiero navegar tiene que ser cualquiera que tenga definido */
        }
    }

    Storage.prototype.setItem = jest.fn();

    test('Debe de mostrar el componente si esta autenticado y guardar localStorage', () => {
        
        //** Quiero probar un componente */
        const wrapper = mount(
            //** Este es otro HightOrderComponent para que podamos hacer pruebas de Router con ciertas rutas, osea el MemoryRouter va a falserar las diferentes rutas para que las pueda evaluar */
            <MemoryRouter> 
                <PrivateRoute //** Como quiero renderizar este componente tengo los propsTypes que me estan obligando porque los marque requeridos 199-3:37 */
                    isAutenticated={ true } //** Este es un booleano que voy a evaluar, si estoy autenticado voy a ponerlo como true */
                    component={ () => <span>Listo!</span> } //** Voy a mandar un componente, que me lo voy a inventar que va a ser un span que diga cualquier cosa, pero me dijo que hay que mandarlo como una funcion asi que lo hago una funcion de flecha y ya con eso lo hago funcion */
                    { ...props } //** Estan con el operador spred las props que defini en la linea de 7 de la creacion de una constante */
                />
            </MemoryRouter>
        );
        
        // console.log( wrapper.html() );
        //** Esta prueba fallo, porque como esta la prueba, en el HighOtderComponent, no podemos usar el shallow, porque este solo va a renderizar el componente, en este caso el HighOrderComponent, pero no va a renderizar lo de adentro, pero el shallow no me va a funcionar como por ejemplo con el HOC del MemoryRouter, pero para esto voy a utilizar el mount */
        expect( wrapper.find('span').exists() ).toBe(true); //** Aqui me interesa ver el span exista y que este el valor en true */
        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/marvel') //** Recordemos que ahora es una funcion jest, no debo mandarlo vacio, porque me va a dar un error, y debe haber sido llamado con el lastPath y el otro debe ser el pathname (que seria /marvel) */
    })

    test('Debe de bloquear el cmponente si no eta autenticado', () => {
        const wrapper = mount(
            //** Este es otro HightOrderComponent para que podamos hacer pruebas de Router con ciertas rutas, osea el MemoryRouter va a falserar las diferentes rutas para que las pueda evaluar */
            <MemoryRouter> 
                <PrivateRoute //** Como quiero renderizar este componente tengo los propsTypes que me estan obligando porque los marque requeridos 199-3:37 */
                    isAutenticated={ false } //** Este es un booleano que voy a evaluar, si estoy autenticado voy a ponerlo como true */
                    component={ () => <span>Listo!</span> } //** Voy a mandar un componente, que me lo voy a inventar que va a ser un span que diga cualquier cosa, pero me dijo que hay que mandarlo como una funcion asi que lo hago una funcion de flecha y ya con eso lo hago funcion */
                    { ...props } //** Estan con el operador spred las props que defini en la linea de 7 de la creacion de una constante */
                />
            </MemoryRouter>
        );
        
        // console.log( wrapper.html() );
        //** Esta prueba fallo, porque como esta la prueba, en el HighOtderComponent, no podemos usar el shallow, porque este solo va a renderizar el componente, en este caso el HighOrderComponent, pero no va a renderizar lo de adentro, pero el shallow no me va a funcionar como por ejemplo con el HOC del MemoryRouter, pero para esto voy a utilizar el mount */
        expect( wrapper.find('span').exists() ).toBe(false); //** Aqui me interesa ver el span exista y que este el valor en true */
        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/marvel') //** Recordemos que ahora es una funcion jest, no debo mandarlo vacio, porque me va a dar un error, y debe haber sido llamado con el lastPath y el otro debe ser el pathname (que seria /marvel) */
    })
})

//** Actualizamos la version de Enzyme, la documentacion la encontramos en github */