import { Todo } from "../interfaces/interfaces"
// import { useContext } from 'react';
// import { TodoContext } from '../context/TodoContext';
import { useTodos } from '../hooks/useTodos';

interface props {
    todo: Todo //** Los todo va a ser del tipo Todo */
}

export const TodoItem = ({ todo }: props) => { //** Ahora el todo va a ser de tipo props */

  // const { toggleTodo } = useContext( TodoContext ); //** Voy a mandar llamar el toggleTodo y desestructuro algo del TodoContext y lo obtengo en el principio */
  const { toggleTodo } = useTodos(); //** Voy a mandar llamar el toggleTodo y desestructuro algo del TodoContext y lo obtengo en el principio */

    // const handleDbClick = () => { //** A donde voy a hacer el cambio, si esta completado o no */
        // console.log( 'handleDbClick:', todo.desc );
        // toggleTodo( todo.id ); //** Lo mando llamar, con su id */
    // }

  return (
    <li style={{
      cursor: 'pointer',
      textDecoration: todo.completed ? 'line-through' : '' //** Si esta completado que le ponga una linea, caso contrario no haga nada */
    }}
    // onDoubleClick={ handleDbClick }>
    onDoubleClick={ () => toggleTodo( todo.id) }>
        { todo.desc } {/* Aqui pongo la descripcion del todo */}
    </li>
  )
}