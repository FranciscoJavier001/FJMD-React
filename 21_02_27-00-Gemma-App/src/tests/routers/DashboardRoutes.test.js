import React from 'react'
import { mount } from 'enzyme'
import { AuthContext } from '../../auth/AuthContext'
import { DashboardRoutes } from '../../routers/DashboardRoutes'
import { MemoryRouter } from 'react-router-dom'

describe('Pruebas en <DashboardRoutes />', () => {
    
    // Si creemos que esto se va ausar mucho en las pruebas hay que dejarlo afuera
    //** Esto es lo que tenia el context, es una simulacion del objeto del provider, el dispatch es una funcion que la vamos a provar con el jest y el estado inicial de la aplicacion del logged es false */
    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Pedro'
        }
    }

    test('Debe mostrarse correctamente', () => {
        
        // Que haga match con el snapshot
        const wrapper = mount(
            //** Esto es el conuwtextValue, que se le va a proveer al AuthContext, de igual manera con el mount voy a renderizar el AppRouter para las pruebas */
            <AuthContext.Provider value={ contextValue }>
                {/* Recuerda, para que no nos salga el error fatal, hay que envolver esto en el MemoryRouter */}
                <MemoryRouter>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect( wrapper ).toMatchSnapshot()
        expect( wrapper.find('.text-info').text().trim() ).toBe('Pedro') //** Asi confirmamos que el usuario autentificado sea pedro, y el trim es para borrar espacios */
    })  
})
