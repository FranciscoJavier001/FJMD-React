//**_______________________________________________________________________________________________________________________________________________*/
import React from 'react';
import { mount } from 'enzyme'
import { MemoryRouter, Router } from 'react-router-dom';
import '@testing-library/jest-dom' //** Para tener la ayuda */

import { AuthContext } from '../../../auth/AuthContext';
import { Navbar } from '../../../components/ui/Navbar';
import { types } from '../../../types/types';

describe('Pruebas en <Navbar />', () => {

    //** Las propiedades del objeto estan en Chrome/Components/Router-History.Provider - Lado derecho */
    const historyMook = { //** Es para usar el history que se llama a trabes del Router l33, para llamar las funciones (salen en el error) */
        push: jest.fn(),
        replace: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn(),
    }

    const contextValue = { //** Necesita un Context components/ui/Navbar-l12, para poderlo enviar, recibe en HeroesApp l25 AC.P v={{ u,d }} */
        dispatch: jest.fn(), //** Para falsear la funcion, que me dice con que argumentos se llamo la funcion */
        user: { //** Es lo que pide del user */
            logged: true, //** Estado en la App */
            name: 'Carlos' //** Nombre del usuario */
        }
    }
    
    const wrapper = mount( //** Uso mount, porque voy a montar el componente y verificar los argumentos que recibe */
        <AuthContext.Provider value={ contextValue }> {/* Nos pide que lo proveamos, en HeroesApp */}
            <MemoryRouter> {/* Para memorizarlo y que no nos mande error del link */}
                <Router history={ historyMook }> {/* Router, recibe el history y dentro el hystoryMook */}
                    <Navbar /> {/* Solo voy a probar el Navbar */}
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    );

    afterEach(() => { //** Despues de hacer un mook, hay que limpiarlos, asu se limpian */
        jest.clearAllMocks();
    })

    test('Debe de mostrarse correctamente', () => {

        expect( wrapper ).toMatchSnapshot(); //** Para tener el snapshot */
        expect( wrapper.find('.text-info').text().trim() ).toBe('Carlos') //** Snapshot tenga el campo t-i un texto con "Carlos" del cV t=l56-l62 */
    });

    test('Debe de llamar el logout y el usar history', () => {

        wrapper.find('button').prop('onClick')(); //** Asi disparo el evento click, usando la propiedad que sea onClick, asi ejecuto la funcion */

        expect( contextValue.dispatch ).toHaveBeenCalledWith({ //** Voy a evaluar si la funcion cV.d fue llamada */
            type: types.logout //** Fue llamada con el logout */
            // type: "[auth] logout" //** Tambien asi puedo definir que se llamo */
        })

        expect( historyMook.replace ).toHaveBeenCalledWith('/login'); //** Espero que el replace haya sido llamado al login, porque salio logout  */
    })  
})