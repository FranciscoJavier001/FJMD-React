//**_______________________________________________________________________________________________________________________________________________*/
import React from 'react'
import { mount } from 'enzyme'
import { AuthContext } from '../../auth/AuthContext' //** Este lo usamos en el Main de HeroesApp y en l25 pide el contexto de AC.P v{{u, d}} */
import { DashboardRoutes } from '../../routers/DashboardRoutes'
import { MemoryRouter } from 'react-router-dom'

describe('Pruebas en <DashboardRoutes />', () => {
    
    const contextValue = { //** Como pide el user y dispatch hay que darle el contexto */
        dispatch: jest.fn(), //** Para disparar la prueba */
        user: { //** Pide el user, asi que pasamos estos parametros */
            logged: true, //** Estatus del logeo */
            name: 'Pedro' //** El nombre */
        }
    }

    test('Debe mostrarse correctamente', () => {
        
        const wrapper = mount( //** Vamoos a montar el componente */
            <AuthContext.Provider value={ contextValue }> {/* Asi le damos el contexto, definido l10 */}
                <MemoryRouter> {/* Para memorizarlo y que no nos mande error del link */}
                    <DashboardRoutes /> {/* Que componente vamos a mostrar/evaluar */}
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect( wrapper ).toMatchSnapshot() //** Que haga match con el Snapshot */
        expect( wrapper.find('.text-info').text().trim() ).toBe('Pedro') //** Que lo busque en el snapchot y lo encontro */
    })  
})