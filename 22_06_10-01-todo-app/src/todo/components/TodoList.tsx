import { useContext } from "react";
import { TodoContext } from '../context/TodoContext';
import { TodoItem } from "./TodoItem";
import { useTodos } from '../hooks/useTodos';

export const TodoList = () => {

    // //** Para ver los todos que tengo en el state con el uC y el context va a ser del tipo TC */
    // const { todoState } = useContext( TodoContext ) //** Como ya hice el TodoState ya lo puedo importar */
    // const { todos } = todoState //** Asi tengo todos los todos que tengo en el state */
    const { todos } = useTodos()//** Para tomarlos de mi customHook de aqui, es lo mismo que los de arriba */

    // console.log( todoState ); //** Para ver el estado del todoState */
    

    return (
    <ul>
        { /* Ahora voy a traer lo del TodoItem que son los todos con las descripciones pero con la llave que es identificador unico */
            todos.map( todo => <TodoItem key={todo.id} todo={ todo } /> ) //** le mando el todo con el todo de este momento */
        } 
    </ul>
    )
};
