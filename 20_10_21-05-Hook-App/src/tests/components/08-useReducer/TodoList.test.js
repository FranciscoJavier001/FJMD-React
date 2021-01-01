import React from 'react';
import { shallow } from 'enzyme';
import { TodoList } from '../../../components/08-useReducer/TodoList';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas en <TodoList />', () => {
    
    //** Definimos las funciones con el jest.fn */
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow( //** Esta constante debe ser igual a un componente de las funciones que necesita sus argumentos y los definimos */
        <TodoList 
            todos={ demoTodos } //** Esta es una lista que tengo lista */
            handleDelete={ handleDelete } //** Funcion de eliminar que debemos de pasar por referencia el componente hijo */
            handleToggle={ handleToggle } //** Funcion de señalar que ya los completamos que debemos de pasar por referencia el componente hijo */
        /> 
    )

    test('debe de mostrarse correctamente', () => { //** Asimos toMatchSnapshot con el wrapper */
        
        expect( wrapper ).toMatchSnapshot(); //** Que el wrapper haga match con el snapshot */
    })

    test('debe de tener dos <TodoListItem />', () => {
        
        expect( wrapper.find('TodoListItem').length ).toBe( demoTodos.length ); //** Debemos de tener un arreglo que debe de tener 2 que son los arreglos que tiene el demoTodos */
        expect( wrapper.find('TodoListItem').at(0).prop('handleDelete') ).toEqual( expect.any(Function) ); //** Asi eleiminamos la funcion de eliminar eliminando la primera, (at significa en la posicion y con el props vemos sus propiedades que tiene funciones) y evaluamos las funciones del handleDelete y debe ser igual a cualquier funcion y con el toEqual para ver que sean iguales */
    })
})
