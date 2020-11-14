import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';

import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimeraApp />', () => {
    
    // test('debe de mostrar el mensaje "Hola, Soy Francisco ', () => {
    //     const saludo = 'Hola, Soy Francisco';
    //     const {getByText} = render(<PrimeraApp saludo={saludo}/>);
    //     expect(getByText(saludo)).toBeInTheDocument();
    // })
    
    test('debe de mostrar <PrimeraApp />> correctamente', () => {

        const saludo = 'Hola, Soy Francisco'; 
        const wrapper = shallow(<PrimeraApp saludo={saludo}/>); //** Es como el Render, para simular clicks y demas cosas como si fuera el querySelector */

       expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar el subtitulo enviado por props ', () => {
        const saludo = 'Hola, Soy Francisco';
        const subTitulo = 'Soy un subtitulo';

        const wrapper = shallow(
        <PrimeraApp 
        saludo={saludo}
        subtitulo={subTitulo}
        />
        );

        const textoParrafo = wrapper.find('p').text(); //** Wrapper tiene toda la informacion del componente renderizado, lo barre con el .find (se parece al querysEelector), luego le dice a donde apunte, por ejemplo, aqui apunta al parrafo "p", luego queremos ver la indo del texto */
        
        expect(textoParrafo).toBe(subTitulo); //** Aqui decimos que textoParrafo tiene que ser un subtitulo */
    });
    
})
