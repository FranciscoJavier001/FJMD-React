import React from 'react';
import { shallow } from 'enzyme';
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';

describe('Pruebas en <RealExampleRef />', () => {
    
    const wrapper = shallow( <RealExampleRef/> ); //** Este es para renderizar el componente y hacer el snapshot */

    test('debe mostrarse correctamente', () => { //** Debe de hacer match con el snapshot, este se hace importando el shallow y con el wrapper */
        
        expect( wrapper ).toMatchSnapshot(); //** Se comprueba que este como falso al iniciar el componente */
        expect( wrapper.find('MultipleCustomHooks').exists() ).toBe(false); //** Que cuando se crea el componente debe de ser false */
    });


    test('debe de mostrar el componente <MultipleCustomHooks />', () => { //** Hay que simular el click, es donde salian las frases de breaking bad, si le daba click en el boton para simular */
        
        wrapper.find('button').simulate('click'); //** De esta manera simulamos el boton de Show/Hide */
        expect( wrapper.find('MultipleCustomHooks').exists() ).toBe(true); //** Ahora con este vemos si ya eiste en el DOM el quote con la frase y el autor, y con esto existe y debe ser true, porque es lo que cambiaba el useState que por default es false */
    })
})
