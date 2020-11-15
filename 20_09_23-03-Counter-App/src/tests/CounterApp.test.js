import React from 'react';
import {shallow} from 'enzyme'

import CounterApp from '../CounterApp'

describe('Pruebas en <CounterApp />', () => {
    let wrapper = shallow(<CounterApp />); //** Vamos a probar el componente de CounterApp, pero aqui le ponemos que los valores van a ser cambiantes */
    beforeEach(() => { //** Con esto reiniciamos los valores */
        
        wrapper = shallow(<CounterApp />); //** Shallow hace simulaciones */
    })

    test('should debe de mostrar <CounterApp /> correctamente', () => {
        
        expect(wrapper).toMatchSnapshot(); //** Para mostrar el CounterApp Correctamente */
    });

    test('debe de mostrar el valor por defecto de 100', () => {
        const wrapper = shallow(<CounterApp value={100}/>); //** Modificamos el componente y le ponemos un valor de 100 */
        const counterText = wrapper.find('h2').text().trim(); //** Trim borra los espacios en ambos lados */
        
        expect(counterText).toBe('100') //** Aqui el CounterText debe de tener ya el valor de 100 */
    });

    test('debe de incrementar con el boton +1 ', () => {
        wrapper.find('button').at(0).simulate('click'); //** Wrapper me sirve para hacer simulaciones, como no tienen id entonces 0 es la posicion de donde se situa el click */
        const counterText = wrapper.find('h2').text().trim(); //** Colocamos que el h2 debe de tener el valor de 11 */
        console.log(counterText);
        expect(counterText).toBe('11'); //** Debe de ser 11 */
    });

    test('debe de decrementar con el boton -1 ', () => {
        wrapper.find('button').at(2).simulate('click'); //** Ponemos los click que debe de dar en el at 2 porque eran 11 y se convierten en 10*/
        const counterText = wrapper.find('h2').text().trim(); 
        console.log(counterText);
        expect(counterText).toBe('9');
    });

    test('debe de colocar el valor por defecto con el btn reset ', () => {
        const wrapper = shallow(<CounterApp value={105}/>); //** El Counter cambia al valor que nosotros queramos */

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text().trim(); //** Aqui borramos estos */
        console.log(counterText);
        expect(counterText).toBe('105');
    });
    
})
