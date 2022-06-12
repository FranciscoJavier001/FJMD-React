import { TodoContext } from '../context/TodoContext';
import { useContext } from 'react';

export const useTodos = () => {
    const { todoState, toggleTodo } = useContext(TodoContext);
    const { todos } = todoState;

    return {
        todos: todos,
        pendingTodos: todos.filter(todo => !todo.completed).length, //** Para saber cuales estan en falso para saber cuales son pendientes, nos regresa el tamaño */
        toggleTodo //** Lo voy a regresar */
    }
}