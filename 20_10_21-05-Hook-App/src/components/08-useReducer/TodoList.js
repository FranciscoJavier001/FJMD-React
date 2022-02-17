import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({ todos, handleDelete, handleToggle }) => { //** Exportamos TodoList, que esta en TodoApp y le asiganos un valor a cada una de las variables, pero las pasamos ya desestructuradas, estas 3 variables ya estan en TodoApp */
    return ( //** Vamos a retornar */

        // list-group crea una lista, que se mueve hacia la izquierda, y el list-group-flush elimina el recuadro del input
         <ul className="list-group list-group-flush"> 
        {
            todos.map( (todo, i) => (
                <TodoListItem //** Este es el componente, que importamos del TodoListItem */
                    key={ todo.id } //** Tenemos que definir todos estos, el indice nunca hay que usarlo como key */
                    todo={ todo }
                    index={ i }
                    handleDelete={ handleDelete } //** Es la referencia a la funcion */
                    handleToggle={ handleToggle } //** Es la referencia a la funcion */
                />
            ))
        }
    </ul>
    )
}
