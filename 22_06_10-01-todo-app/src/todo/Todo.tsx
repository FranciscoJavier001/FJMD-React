//** Recordar npx create-react-app <nombre> --template typescript  */
import { Title } from './components/Title';
import { TodoList } from './components/TodoList';
import { TodoProvider } from './context/TodoProvider';

//** Debo de crear un context */
export const Todo = () => {
    return (
         //** De aqui para adelante voy a requerir toda la informacion que el TodoProvider va a proveer */
        <TodoProvider>
            <Title />
            <TodoList />
        </TodoProvider>
    )
}
