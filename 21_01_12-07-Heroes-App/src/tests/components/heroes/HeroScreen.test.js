//**_______________________________________________________________________________________________________________________________________________*/
import React from 'react'
import { mount } from 'enzyme'
import { HeroScreen } from '../../../components/heroes/HeroScreen';
import { MemoryRouter, Route } from 'react-router-dom';

describe('Pruebas en <HeroScreen />', () => {
    
    const history = { //** Como HeroScreen recibe history, voy a crear esta dependencia para mandar, para falsear el mook components/heroes/HS l6 */
        length: 10, //** Tengo definido que el length debe ser mayor a 2, para usar el push, osea regresarme a marvel */
        push: jest.fn(), //** push, osea que me lleve al inicio */
        goBack: jest.fn(), //** Para irme una pagina atras */
    }

    const wrapper = mount( //** Hago un Mount, porque voy  recibir un argumento */
        <MemoryRouter initialEntries={['/hero']}> {/* Tengo un string vacio, necesito iE con URL y argumentos que debo enviar, y mando el '/hero' */}
            <HeroScreen history={ history } /> {/* HeroScreen necesita el history, mando el que esta l9 */}
        </MemoryRouter>
    );

    test('Debe de mostrar el componente redirect si no hay argumentos en el URL', () => {

        // const wrapper = mount(
        //     <MemoryRouter initialEntries={['/hero']}>
        //         <HeroScreen history={ history } />
        //     </MemoryRouter>
        // );
        
        expect( wrapper ).toMatchSnapshot()
        expect( wrapper.find('Redirect').exists() ).toBe(true); //** Debo de ver que el componente Redirect exista */
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