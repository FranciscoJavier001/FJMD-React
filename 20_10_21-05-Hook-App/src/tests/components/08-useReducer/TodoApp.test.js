import React from 'react'; //** Justo despues falta llamar a React porque estoy renderizando el componente */
import { shallow, mount } from "enzyme";
import { TodoApp } from "../../../components/08-useReducer/TodoApp"
import { demoTodos } from '../../fixtures/demoTodos';
import { act } from '@testing-library/react';

describe('Pruebas en <TodoApp />', () => { //** Que haga match con el snapshot */

    const wrapper = shallow( <TodoApp />); //** Primero creamos la constante wrapper que va ser igua a shallow, luego el nombre del componente */

    Storage.prototype.setItem = jest.fn(()=> {}); //** Para hacer la prueba de la linea 28, esto ya viene en las pruebas, aqui el prototype del setItems y va a ser igual a un jest.fn() y la definimos vacia */

    test('debe de mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot(); //** Asi se hace match con el snapshot, asi creamos el nuevo snapshot */
    });

    test('debe de agregar un TODO', () => { //** Aqui vamos a montarlo */

        const wrapper = mount( <TodoApp /> ); //** Creamos una constanste llamada wrapper nuevamente, recordamos que es una constante de scope y aqui vamos a llamar el mount de enzyme, este lo usamos cuando vamos a probar toda la aplicacon en contexto, va a recibir los mismos argumentos del todoApp, la diferencia es el nivel donde se va a renderizar la aplicacion */

        act( () => { //** Hay que envolverlo en el act, hay que importarlo del testing-library de react, porque vamos a hacer un cambio aqui, es un callback en el cual ya podemos hacer las modificaciones */
            wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[0] ); //** Busamos el elemento llamado TodoAdd, que tiene una property llamada handleAddTodo que es una funcion que sirve para gregar, y la vamos a ejecutar extrayendo la referencia mandandole el demoTodos el primero que es el 0 */
            wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[1] ); //** Extraemos los dos todos que tenemos */
        });

        expect( wrapper.find('h1').text().trim() ).toBe('TodoApp ( 2 )'); //** Esperamos que el h1 tenga dos elementos, aqui esperamos que los textos, para evaluarlos usamos el trim y debe der 2 elementos  */
        expect( localStorage.setItem ).toHaveBeenCalledTimes(2); //** Asi confirmamos que llamamos al localStorage haya sido llamado dos veces */ 
    });

    test('debe de eliminar un todo', () => { //** Asi vemos si se elimina un todo */
        
        wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[0] ); //** Quiero el todoAdd del property, vamos a buscar la funcion del habdleAddTodo (que es para agregar) y mandamos el demoTodos en la posicion 0 para añadirlo */
        wrapper.find('TodoList').prop('handleDelete')( demoTodos[0].id ); //** Aqui vamos a llamar al handleDelete que vamos a llamar ese metodo y el id que vamos a eliminar es 0 */

        expect( wrapper.find('h1').text().trim() ).toBe('TodoApp ( 0 )'); //** Este es para comprobar si lo añadimos, nomas quitamos la funcion de eliminar y le ponemos un 1 al final */
    });  
})