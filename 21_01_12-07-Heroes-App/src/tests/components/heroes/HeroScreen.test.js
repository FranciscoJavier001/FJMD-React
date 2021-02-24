import React from 'react'
import { shallow, mount } from 'enzyme'
import { HeroScreen } from '../../../components/heroes/HeroScreen';
import { MemoryRouter } from 'react-router-dom';

describe('Pruebas en <HeroScreen />', () => {
    
    //** Tenemos una dependencia que tenemos que mandar que es el history */
    const history = { //** Que vamos a necesitar de el */
        length: 10,
        push: jest.fn(),
        goBack: jest.fn(),
    }

    //** Siempre hay que definir primero si vamos a usar un mount o un shallow */
    const wrapper = mount(
        // initialEntries va a ser un objeto que nosotros vamos a definir con el url y con los argumentos que necesitamos enviarle
        <MemoryRouter initialEntries={['/hero']}>
        {/* Aqui ponemos lo que vamos a renderizar, de igual manera tiene que tener un history, pero le vamos a mandar el que acabamos de crear arriba */}
        <HeroScreen history={ history } />
        </MemoryRouter>
    );

    test('Debe de mostrar el componente redirect si no hay argumentos en el URL', () => {
        
        //** Vamos a hacer match con el snapshot */
        // expect( wrapper ).toMatchSnapshot()
        expect( wrapper.find('Redirect').exists() ).toBe(true);
    })  
})