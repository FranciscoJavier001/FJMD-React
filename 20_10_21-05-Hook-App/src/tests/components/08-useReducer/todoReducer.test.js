import { todoReducer } from "../../../components/08-useReducer/todoReducer"
import { demoTodos } from "../../fixtures/demoTodos";

describe('Pruebas en todoReducer', () => { //** Descripcion e importamos el todoReducer que no es mas que un switch que regresa su respuesta en el state */
    
    test('debe de retornar el estado por defecto', () => { //** Los reducer siempre regresan un estado */
        
        const state = todoReducer( demoTodos, {}); //** El state es una funcion comun y corriente que va a recibir un arreglo y una accion */
        expect( state ).toEqual( demoTodos ); //** Aqui esperamos los del demoTodos que es un arreglo y si los tiene porque con el toEqual los traemos */
    });

    test('debe de agregar un TODO', () => {
        
        const newTodo = { //** Creamos un nuevo objeto que vamos a insertar */
            id: 3,
            desc: 'Aprender Express',
            done: false
        };

        const action = { //** Ahora aqui ponemos la accion del newTodo, donde el tipo es agregar y se agrega, porque cambia con el payload */
            type: 'add',
            payload: newTodo
        };
        
        const state = todoReducer( demoTodos, action ); //** el nuevo state es el arreglo del demoTodos y la nueva accion que fue agregar */
        expect( state.length ).toBe( 3 ); //** Aqui esperamos que el arreglo sea de 3 */
        expect( state ).toEqual( [...demoTodos, newTodo ] ); //** Regresamos el nuevo state y debe ser igual a los todos que son 2 y agregamos el nuevo */
    });

    test('debe de borrar un TODO', () => { //** Para borrar, mandamos el id del Todo */
        // action.payload = ID del TODO
        const action = { //** El action va a ser igual a un objeto el cual tiene el type que va a mandar que va a ser el delete y el payload solo es el id del todo que quiero borrar */
            type: 'delete',
            payload: 1
        }

        const state = todoReducer( demoTodos, action ); //** Creamoe el state que va a ser igual al todoReducer, donde mandamos el demoTodos y mandamos la action */

        expect( state.length ).toBe( 1 ); //** Ahora esperamos que el state ahora solo sea 1, el tamaño del arreglo */
        expect( state ).toEqual( [ demoTodos[1] ] ); //** El arreglo va a ser igual a demoTodos y que solo quede el 1, recuerda para objetos el toEqual */
    });

    test('debe de hacer el TOGGLE del TODO', () => { //** Cambiar el valor booleano de este a completado */
        
        const action = { //** El action debe ser el toggle, para hacer la señalizacion de que ya lo hicimos y cambia su valor booleano a completado */
            type: 'toggle',
            payload: 1
        }

        const state = todoReducer( demoTodos, action ); //** Recuerda, este es el arreglo de los 2 elementos que hicimos para las pruebas */

        expect( state[0].done ).toBe( true ); //** El primer elemento.done ahora este en true porque ya esta completado */
        expect( state[1] ).toEqual( demoTodos[1]  ); //** Que el segundo elemento sea igual asi como este, para asegurarme que el segundo no cambio, el segundo elemento es igual y no se ha cambiado */
    });
})