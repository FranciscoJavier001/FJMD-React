//**_______________________________________________________________________________________________________________________________________________*/
import React from 'react'
import { shallow, mount } from 'enzyme'
import { HeroScreen } from '../../../components/heroes/HeroScreen';
import { MemoryRouter, Route } from 'react-router-dom';

describe('Pruebas en <HeroScreen />', () => {
    
    const history = { 
        length: 10, 
        push: jest.fn(), 
        goBack: jest.fn(), 
    }

    const wrapper = mount( 
        <MemoryRouter initialEntries={['/hero']}>
            <HeroScreen history={ history } />
        </MemoryRouter>
    );

    test('Debe de mostrar el componente redirect si no hay argumentos en el URL', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
            <HeroScreen history={ history } />
            </MemoryRouter>
        );
        
        expect( wrapper ).toMatchSnapshot()
        expect( wrapper.find('Redirect').exists() ).toBe(true);
    })

    test('Debe de mostrar un heroe si el parametro existe y se encuentra', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path="/hero/:heroeId" component={ HeroScreen } />
            </MemoryRouter>
        )

        expect( wrapper.find('.row').exists() ).toBe(true)
    })

    test('Debe de regresar a la pantalla anterior con PUSH', () => {
        
        const history = { 
        length: 1,
        push: jest.fn(),
        goBack: jest.fn(),
    }
    
    const wrapper = mount(
        <MemoryRouter initialEntries={['/hero/marvel-spider']}>
            <Route
                path="/hero/:heroeId" 
                component={ () => <HeroScreen history={ history } /> } 
            />
        </MemoryRouter>
        )

        wrapper.find('button').prop('onClick')()

        expect( history.push ).toHaveBeenCalledWith('/')
        expect( history.goBack ).not.toHaveBeenCalled()
    })

    test('Debe de regresar a la pantalla anterior GOBACK', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route
                    path="/hero/:heroeId" 
                    component={ () => <HeroScreen history={ history } /> } 
                />
            </MemoryRouter>
            )
    
            wrapper.find('button').prop('onClick')()
    
            expect( history.push ).toHaveBeenCalledTimes(0) //** Que haya sido llamado 0 veces */
            expect( history.goBack ).toHaveBeenCalled() //** Que haya sido llamado */
    })

    test('debe de llamar el redirect si el heroe no existe', () => {
        

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider0']}>
                <Route
                    path="/hero/:heroeId" 
                    component={ () => <HeroScreen history={ history } /> } 
                />
            </MemoryRouter>
            )
    
            expect( wrapper.text() ).toBe('');
    })
})