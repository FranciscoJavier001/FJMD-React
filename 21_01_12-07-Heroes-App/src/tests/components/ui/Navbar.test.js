//**_______________________________________________________________________________________________________________________________________________*/
import React from 'react';
import { mount } from 'enzyme'
import { MemoryRouter, Router } from 'react-router-dom';
import '@testing-library/jest-dom'

import { AuthContext } from '../../../auth/AuthContext';
import { Navbar } from '../../../components/ui/Navbar';
import { types } from '../../../types/types';

describe('Pruebas en <Navbar />', () => {

    const historyMook = { 
        push: jest.fn(),
        replace: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn(),
    }

    const contextValue = { 
        dispatch: jest.fn(), 
        user: {
            logged: true, 
            name: 'Carlos'
        }
    }
    
    const wrapper = mount( 
        <AuthContext.Provider value={ contextValue }>
            <MemoryRouter> 

                <Router history={ historyMook }>
                    <Navbar /> 
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    );

    afterEach(() => {
        jest.clearAllMocks();
    })

    test('Debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot(); 
        expect( wrapper.find('.text-info').text().trim() ).toBe('Carlos') 
    });

    test('Debe de llamar el logout y el usar history', () => {
        
        wrapper.find('button').prop('onClick')(); 

        expect( contextValue.dispatch ).toHaveBeenCalledWith({
            type: types.logout
        })

        expect( historyMook.replace ).toHaveBeenCalledWith('/login');
    })  
})