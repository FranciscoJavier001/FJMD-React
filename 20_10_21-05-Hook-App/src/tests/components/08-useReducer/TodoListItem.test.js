import React from 'react';
import { shallow } from 'enzyme';
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import { demoTodos } from '../../fixtures/demoTodos';

//demoTodos

describe('Pruebas en <TodoListItem />', () => {

    //** Estos deben de ser creados con el jest.fn (fn de function) */
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(
        <TodoListItem //** A este hay que madarle cada uno de los proTypes que es lo que tiene dentro y deben de ser definidos */
            todo={ demoTodos[0] } //** Este tiene que ser data, y por eso usamos el demotodos */
            index={ 0 } //** Le mandamos un indice */
            handleDelete={ handleDelete } //** Estos dos deben ser llamados asi nomas, asi llamamos las referencias */
            handleToggle={ handleToggle }
        />
    )

    test('debe de mostrarse correctamente', () => { //** Solamente hacemos la comparacion con el snapshot, importamos react, del shallow viene la renderizacion del wrapper, e importamos el TodoListItem */
        
        expect( wrapper ).toMatchSnapshot(); //** El primero no es mas que hacer el snapshot */
    });

    test('debe de llamar la función handleDelete', () => { //** Necesitamos la referencia al boton del handleDelete */
        
        wrapper.find('button').simulate('click'); //** Buscamos el boton y vamos a simular el click */
        expect( handleDelete ).toHaveBeenCalledWith( demoTodos[0].id ); //** Esperamos que el handleDelite, debe de ser llamado y esperamos que se mande con un valor y que solo se mande el 1, porque esperamos el todoId y estamos mandando el id en la posicion 0 que tiene el valor de 1, que debe de ser el mismo */
    });

    test('debe de llamar la función handleToggle', () => {
        
        wrapper.find('p').simulate('click'); //** Aqui tiene que ser el handleToggle y este tiene que hacer click cuando alguien da click en el parrado, osea que se borre cuando alguien da click y se tiene que llamar con el id */
        expect( handleToggle ).toHaveBeenCalledWith( demoTodos[0].id );
    });

    test('debe de mostrar el texto correctamente', () => {
        
        const p = wrapper.find('p'); //** Vamos a buscar el parrafo */
        expect( p.text().trim() ).toBe(`1. ${ demoTodos[0].desc }`) //** Aqui esperamos que el p.text tiene que ser un string y tiene que ser igual el index   */
    });

    test('debe de tener la clase complete si el TODO.done = true', () => { //** Tiene que hacer el efecto del complete */
        
        const todo = demoTodos[0]; //** Extraemos un todo que este completado */
        todo.done = true; //** Tiene que ser true */
        
        const wrapper = shallow( //** Este renderiza el listItem con toda la cosa ya completado */
            <TodoListItem 
                todo={ todo }
            />
        );

        expect(wrapper.find('p').hasClass('complete') ).toBe(true); //** Asi evaluamos que tenga la clase complete */
    });

})
