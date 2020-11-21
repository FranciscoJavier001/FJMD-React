import React from 'react' //** Importamos React para las pruebas */
import '@testing-library/jest-dom' //** Para evitar errores de escritura */
import {shallow} from 'enzyme'  //** Importamos Shallow desde enzyme */
import { GifExpertApp } from '../GifExpertApp' //** Importamos el componente al cual le vamos a hacr la prueba */

describe('Pruebas en el <GifExpertApp/>', () => {
    
    test('Debe de mostrarse corectamente', () => {

        const wrapper = shallow(<GifExpertApp/>) //** Es por default pasadole por argumento el el archivo que voy a evaluar */
        
        expect(wrapper).toMatchSnapshot(); //** Esto hace el snapshot */
    });

    test('Debe de mostrar una lista de categorias', () => { //** Le mandamos archivos desde aqui para ver cuantos espacios tiene */
        const categories = ['Death Note', 'Vegeta'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />); //** Le mandamos las categories como argumento */

        expect(wrapper).toMatchSnapshot(); //** Creaos el snapchot */
        expect(wrapper.find('GifGrid').length).toBe(categories.length); //** Aqui vemos cuantos arreglos tiene y lo comparamos para ver si son los mismos de las categories */
    })
    
})