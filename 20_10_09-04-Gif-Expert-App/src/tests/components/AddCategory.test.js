import React from 'react';
import '@testing-library/jest-dom'

import {shallow} from 'enzyme'
import { AddCategory } from '../../components/AddCategory'

describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn() //** Se crea una funcion que no haga nada, pero de esta manera me dice si fue llamada, cuentas veces fue llamada, etc gracias a jest */
    let wrapper = shallow (<AddCategory setCategories={setCategories}/>) //** Aqui se la pasamos como argumento para que pase la prueba, lo subimos porque no lo vamos a cambiar y lo vamos a seguir usando */

    beforeEach(()=> { //** Ciclo de vida de las pruebas, recibe un callback qe es una funcion de flecha, para reinicializarlo y que se limpie */
        jest.clearAllMocks(); //** Se elimina la simulacion de cualquier cosa */
        wrapper = shallow (<AddCategory setCategories={setCategories}/>) //** Reseteamos el componente como estaba originalmente */
    }) 

    test('Debe de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();
    })

    test('Debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input') //** Referencia al input */
        const value = 'Hola Mundo'

        input.simulate('change', {target: {value: value} }) /**El evento de un handleInputChange se llama de la manera despues de la coma del change, lo que esta adentro de los parentesis/corchetes, que tiene un objeto llamado tarjet y adentro un value */

        expect(wrapper.find('p').text().trim()).toBe(value) //Se busca un parrafo, con el text vemos su contenido, tiene que tener el value que se mando en el 'change'
    })

    test('No debe de postear la informacion con submit', () => {
        wrapper.find('form').simulate('submit', {preventDefault(){}}) //** hacemos referencia wrapper.find, donde buscamos el form, y se va a hacer la simulacion del submit, y estos arguentos van a ser, y se va a mandar la funcion de preventDefault */

        expect(setCategories).not.toHaveBeenCalled() //** Es para ver si no se ha lamado, porque el formulario va vacio */
    })

    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
        /**
         * 1. Simular el inputChange
         * 2. Simular el submit del formulario
         * 3. setCategries se debe de haber llamado
         * 4. El valor del input debe de estar ''
         */
        
        // * 1. Simular el inputChange
         const value = 'Hola Mundo' //** Este valor lo usamos para las pruebas */

         wrapper.find('input').simulate('change', {target: {value}}) //** Primero vamos a buscar el input, luego vamos a simular el change mandandole el argumento de event 'e' que seria target, dentro de otras llaves el value, es un objeto dentro de otro objeto, con esto cambia el input y se establece el valor de hola mundo, que manda al setState y todas las cosas */

         // * 2. Simular el submit del formulario
         wrapper.find('form').simulate('submit', {preventDefault(){}}) //** Esperamos en el form el submit, por eso primero ponemos donde vamos a trabajar, luego lo que vamos a hacer, aqui estamos esperando la funcion de preventDefault  */
     
         // * 3. setCategries se debe de haber llamado
         expect(setCategories).toHaveBeenCalled()
        //  expect(setCategories).toHaveBeenCalledTimes(2) //** Aqui esperamos que se llamara 2 veces, pero solo se llamo 1 */
        //  expect(setCategories).toHaveBeenCalledWith(expect.any(Function)) //** Esperamos que se haya lamado con una funcion, desde el AddCategory en el IF de la linea 19 */

         // * 4. El valor del input debe de estar ''
         expect(wrapper.find('input').prop('value')).toBe('') //** Voy a trabajar en el input, poniendo que el valor va vacio */
    })
    
})