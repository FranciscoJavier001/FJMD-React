import { createContext } from 'react';
import { TodoState } from '../interfaces/interfaces';

export type TodoContextProps = { //** Es como un interface, pero este no se puede extender */
    todoState: TodoState //** Va a tener un todo que va a ser de TodoState, importar de interfaces */
    toggleTodo: ( id: string ) => void //** Funcion que recibe un argumento de tipo string y no regresa nada */
}

//** Lo exporto, porque lo quiero usar en otros lugares, y aqui tengo lo que quiero compartir con mis componentes y ahorita es un componente vacio a compartir */
//** Es todo lo que necesito para crear un contexto, necesito un povedor de informacion */
//** Lo de cC es para indicar que es un generico que lo que va a fuir internamente es un TCP */
export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps  ) //** Lo del as es para indicarle que va a ser del tipo TCP */
