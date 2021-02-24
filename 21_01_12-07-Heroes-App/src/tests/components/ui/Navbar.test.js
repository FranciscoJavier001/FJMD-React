import React from 'react';
import { mount } from 'enzyme'
import { MemoryRouter, Router } from 'react-router-dom';
import '@testing-library/jest-dom'

import { AuthContext } from '../../../auth/AuthContext';
import { Navbar } from '../../../components/ui/Navbar';
import { types } from '../../../types/types';

describe('Pruebas en <Navbar />', () => {

    //** Que onda con los customhooks, donde lo primero que quiero hacer es generar un historyMook que es el que se llama a traves del router, en palabras simples se lo puedo mandar al router y el componente cuando va a utilizar el useHistory va a ver y a utilizar el history que tiene este router y puedo fingir el router en el wrapper = mount */
    const historyMook = { //** Este historyMook va a tener lo que queremos que tenga que puede tener un push que seria un jest.fn() para hacer igualaciones, y el location que va a ser un objeto vacio */
        // Aqui me mando un error, me pidio un listen
        push: jest.fn(),
        replace: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn(),
    }

    // Aqui hay que Proveer lo que tenia el Context, que es el user y el dispatch
    const contextValue = { //** Este va a ser la simulacion del objeto que definimos abajo, en el provider */
        dispatch: jest.fn(), //** Cuando queremos provar funciones lo mejor que podemos hacer es usar jest.fn() */
        user: {
            logged: true, //** Va a tener el logged en true porque el usuario ya debia estar autentificado */
            name: 'Carlos'
        }
    }
    
    //** Voy a crear el wrapper afuera, porque puede que pueda reutilizar los componentes */
    const wrapper = mount( //** Asi renderizamos componentes, y hay que vereficar si recibe algun argumento */
        // Hay que importar el AuthContext.Provider para que se pueda hacer la desestructuracion de user y no nos maque error
        // Otra cosa, el Context es un HighOrderComponent, osea que ya tenemos una estructura que se parece muchisimo a las pruebas que ya hemos echo antes en el PrivateRoute, asi que no me va a servir con el shallow, voy a tener que usar el mount
        // El contextValue lo voy a mandar al Provider
        <AuthContext.Provider value={ contextValue }>
            <MemoryRouter> 
                {/* Aqui fue donde fingimos el router y vamos a colocar el NavBar dentro del router, y el router recibe el history y dentro del history vamos a mandar el historyMook */}
                <Router history={ historyMook }>
                    <Navbar /> 
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    );

    // Asi es para limpiar el mook, despues de cada una de las pruebas o antes
    afterEach(() => {
        jest.clearAllMocks();
    })

    test('Debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot(); //** El snapshot toma una fotografia que asi lo va a mantener, para si hago algun cambio de lo que se reibio y lo que es, para que asi se quede el componente */
        expect( wrapper.find('.text-info').text().trim() ).toBe('Carlos') //** Aqui esperamos que encuentre la clase de text.info (clase de bootstrap) que tenga el texto, con el trim borramos los espacios que tenga la variable de carlos */
    });

    test('Debe de llamar el logout y el usar history', () => {
        
        //** Vamos a verificar que se llame el dispatch */
        wrapper.find('button').prop('onClick')(); //** Con el wrapper.find voy a buscar el boton y la prop que es la propiedad de la funcion del onClick, asi se llama */

        //** Aqui deberiamos evaluar si el dispatch fue llamado con que argumentos que va a ser un objeto que el tipo fue llamado con el logout , esto seria todo por la parte del dispatch*/
        expect( contextValue.dispatch ).toHaveBeenCalledWith({
            type: types.logout
        })

        //** Ahora voy a esperar que se haya llamado el replace que duera llamado con el /login */
        expect( historyMook.replace ).toHaveBeenCalledWith('/login');
    })  
})

