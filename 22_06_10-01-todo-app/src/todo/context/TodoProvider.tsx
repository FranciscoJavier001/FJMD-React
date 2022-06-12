import { TodoContext } from "./TodoContext";
import { TodoState } from '../interfaces/interfaces';
import { useReducer } from 'react';
import { todoReducer } from './todoReducer';

const INITIAL_STATE: TodoState = { //** Asi voy a tener el estado inicial en duro, va a ser del tipo TodoState */
    todoCount: 2,
    todos: [
        {
            id: '1',
            desc: 'Recolectar las piedras del infinito',
            completed: false
        },
        {
            id: '2',
            desc: 'Piedra del alma',
            completed: false
        }
    ],
    completed: 0,
    pending: 2
}

interface props { //** Como quiero que luzcan las props que recibe el TodoProvider, que tiene el children y lo voy a definir */
    children: JSX.Element | JSX.Element[] //** Este viene de los componentes propios de react, definir los 2, por si son 1 o varios */
}

export const TodoProvider = ({ children }: props ) => { //** El children viene de las props y los voy a desestructurar de las props */

    //** Lo primero es el estado estado, luego la accion que va a disparar, lo primero es el reducer, osea todoReducer y ESTADO INICIAL  */
    const [todoState, dispatch] = useReducer( todoReducer, INITIAL_STATE )

    const toggleTodo = ( id: string ) => { //** Debe recibir el id y su tipo para poder cambiar el todo */
        //** Cuando se dispare hago el dispatch de una accion con su tipo que debe tener el id que recibo como argumento */
        dispatch( { type: 'toggleTodo', payload: { id } } )
    }

return (
    <TodoContext.Provider value={{ /* Aqui necesito el TodoContext con el provider, es conocido como un HOC, que en sus props recibe un children */
    todoState, //** Asi voy a regresar todo el estado en el provider */
    toggleTodo //** Asi voy a regresar la accion que dispara el provider, asi lo van a tener todos los hijos */
    }}>
        { children } {/* Estos van a ser nuestros componentes renderizados dentro del value de arriba */}
    </TodoContext.Provider>
  )
}
