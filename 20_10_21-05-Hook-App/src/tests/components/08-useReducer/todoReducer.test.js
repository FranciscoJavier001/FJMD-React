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

    test('debe de borrar un TODO', () => {
        // action.payload = ID del TODO
        const action = {
            type: 'delete',
            payload: 1
        }

        const state = todoReducer( demoTodos, action );

        expect( state.length ).toBe( 1 );
        expect( state ).toEqual( [ demoTodos[1] ] );


    });

    test('debe de hacer el TOGGLE del TODO', () => {
        
        const action = {
            type: 'toggle',
            payload: 1
        }

        const state = todoReducer( demoTodos, action );

        expect( state[0].done ).toBe( true );
        expect( state[1] ).toEqual( demoTodos[1]  );
        
    });
    
    


})
