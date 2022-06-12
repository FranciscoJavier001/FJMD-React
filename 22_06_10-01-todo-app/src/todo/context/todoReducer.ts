import { TodoState, Todo } from '../interfaces/interfaces';

type TodoAction = //** Estas son los types de las acciones del switch */
| { type: 'addTodo', payload: Todo } //** Voy a crearme 2 acciones - En esta linea el payload va a ser de tipo Todo */
| { type: 'toggleTodo', payload: { id: string } }  //** Voy a recibir el id como string en el payload */

//** Un reducer tiene que trabajar con el estado anterior y una accion, le debo poner como luce el TodoState */
export const todoReducer = (state: TodoState, action: TodoAction ): TodoState  => { //** Despues de los : va aregresar algo de TodoState */

    // console.log({ action }); //** Para ver que pasa cuando le doy dobleclick */
    

    switch (action.type) { //** Dentro ponemos un switch , voy a evaluar el action.type de aqui arriba */
        case 'addTodo': //** En esta linea voy a evaluar si el action.type es addTodo */
        return {
            ...state, //** Voy a hacer un spread del estado anterior */
            todos: [ ...state.todos, action.payload ] //** Voy a regresar un nuevo state, con los todos anteriores y agrego el nuevo */
        }

        case 'toggleTodo': //** En esta linea voy a evaluar si el action.type es toggleTodo */
        return {
            ...state, //** Voy a hacer un spread del estado anterior */
            todos: state.todos.map( ({...todo}) => { //** Voy a hacer un map para recorrer todos los todos */
                if (todo.id === action.payload.id) { //** Si el id del todo es igual al id del payload */
                    todo.completed = !todo.completed //** Le cambio el completed a true */
                }
                return todo //** Regreso el todo */
            })
        }
    
        default:
            return state; //** Siempre voy a retornar el estado en caso que no haya cambios */
    }
}