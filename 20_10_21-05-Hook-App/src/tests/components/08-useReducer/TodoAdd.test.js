import React from 'react';
import { shallow } from 'enzyme';
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';

describe('Pruebas en <TodoAdd />', () => {

    const handleAddTodo = jest.fn(); //** Mook de la funcion, creamos la referencia a la funcion */

    const wrapper = shallow( //** Creamos la constanste wrapper igual a shallow e importamos el componente del todoAdd, este componente necesita una funcion, hacemos el mook de la funcion en la linea 7, necesitamos el handleAddTodo y que va a ser igual al handleAddTodo */
        <TodoAdd 
            handleAddTodo={ handleAddTodo }
        /> 
    )


    test('debe de mostrarse correctamente', () => { //** Hacemos un match con el wrapper */
        
        expect( wrapper ).toMatchSnapshot(); //** Que haga match con el snapshot para segurarnos que el componente no va a cambiar dr manera inexperada */
    });

    test('NO debe de llamar handleAddTodo', () => { //** Como no hay ningun value en la descripcion no se va a mandar porque no tiene nada */
        
        const formSubmit = wrapper.find('form').prop('onSubmit'); //** Aqui buscamos el form con el find usamos el property que va a funcionar para cualquier libreria de terceros y buscamos la property que sea el onSubmit que hace referencia a una funcion */

        formSubmit({ preventDefault(){} }); //** Asi llamamos una funcion, pero devemos de mandar el preventDefault para que no reviente y para decir que es una funcion le ponemos el {} */

        expect( handleAddTodo ).toHaveBeenCalledTimes(0); //** Espero que el handleAddTodo tenga que haber sido llamado 0 veces */
    });

    test('debe de llamar la función handleAddTodo', () => {
        
        const value = 'Aprender Firestore'; //** Primero el value que va a tener la caja de texto */
        wrapper.find('input').simulate('change', { //** Que lo busque en el input que tenemos y vamos a simular el change y el argumento va a ser el target que va a tener el value y el name y el nombre va a ser la descripcion que es el campo que quiero cambiar */
            target: {
                value,
                name: 'description'
            }
        });

        const formSubmit = wrapper.find('form').prop('onSubmit'); //** Tenemos la referencia al formulario y deberia de haberse llamado 1 vez, osea que si tuvimos un valor y que lo quisimos cambiar en el handleAddTodo */
        formSubmit({ preventDefault(){} });

        expect( handleAddTodo ).toHaveBeenCalledTimes(1);
        expect( handleAddTodo ).toHaveBeenCalledWith( expect.any(Object) ); // { } //** Necesitamos que sea llamado conra un objeto, que es el que vamos a evaluar, asi podriamos esperar cualquier objeto */
        expect( handleAddTodo ).toHaveBeenCalledWith({ //** Asi hacemos la prueba mas precisa */
            id: expect.any(Number), //** Asi definimos el objeto, pero ponemos que el numero sea any */
            desc: value,
            done: false
        }); 

        expect( wrapper.find('input').prop('value') ).toBe(''); //** Asi comprobamos que haya mandado llamar al reset de la funcion, entonces hacemos un expect, el efecto que tiene la funcion el value tiene como valor un string vacio, buscamos el input, vamos a evaluar la property value y esta debe ser un string vacio */
    })
})
