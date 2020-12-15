//** Cuando sea un estado simple y no haya mucho que cambiar podemos utilizar el useState, y si es grande usamos un reducer */
//******************************/ dispatch signific envio
// Imporaciones que se pueden mandar llamar desde aqui

import React, { useReducer, useEffect } from 'react';
import { todoReducer } from './todoReducer';

import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import './styles.css';

//** Funcion de flecha que no recibe parametros, pero si las instrucciones que vienen despues, que establece el nuevo estado de los todos en el todoReducer */
const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []; //** Analiza un objeto, y lo transforma en el estado actual, se puso arriba porque es una funcion que se usa en el useEffect (que esta quiere decir "haz el cambio"), que ya se definio abajo y si esta null no regresa nada (pero creo que eso es mas para evitar conflictos), el JSON.parse nos devuelve lo wue tiene dentro el arreglo, por so pusimos que en caso de or nos devuelva el arreglo vacio */
}

// Esto se importa desde todoReducer, estas son las acciones que viene en el Case
export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, [], init); //** El useReducer, maneja el todoReducer que aqui lo importamos, maneja un arreglo con el state actual, y que tiene como estado inicial el init, y los todos que son las acciones actuales y el dispatch, que son las acciones hacia mi reducer /*

    // Va a disparar un callback (que es una funcion que recibe como argumento otra funcion y la ejecuta), si los todos cambian eso significa que vamos a volver a ejecutar la funcion del localStorage y eso es lo que hace el useEffect 
    useEffect( ()=> {
        localStorage.setItem('todos', JSON.stringify( todos ) ); /** Este va a guadar en el LocalStorage cualquier cambio que pase en los todos de la constante de abajo, y el JSON.stringyfy los convierte en strings */ 
    }, [todos]); //** Como los todos cambiaron, entonces se actualizan y vuelve a iniciar la instruccion */

    
    //** Estas son funciones constantes que van a recibir un objeto con sus argumentos y puede generar las siguientes acciones que van a ser guardadas en el todoId */
    const handleDelete = ( todoId ) => {
        const action = { //** action se declara aqui, pero se va a acceder a ella desde el todoReducer en el switch, y si algo cambio en automatico se va a ver reflejado, porque esta comparado con el action.payload que se guarda el cambio en el todoId
            type: 'delete', 
            payload: todoId 
        }
        dispatch( action ); /** Aqui mandamos la nueva accion que se hizo arriba pero ya guardada y lanzada pero ahora como el init nuevo!, recuerda que esta la ponemos afuera para que se haga el disparo de la accion de lo que hagamos */
    }

    const handleToggle = ( todoId ) =>{ //** Recibe el todoId que es donde quiero hacer el cambio y ponerle la linea*/
        dispatch({ //** El dispatch se puede mandar a componentes hijos tambien */
            type: 'toggle',
            payload: todoId
        });
    }
//******************************/
// crear nueva funcion que se llame handleAddTodo que sea una funcion de flecha que va a recibir un nuevo todo que deberia ser un objeto 
    const handleAddTodo = ( newTodo ) => { 
        dispatch({ //** Este es el objeto que crea el action, osea es el disparo de lo nuevo */
            type: 'add',
            payload: newTodo
        });
    }

    // Aqui retornamos el numero de arrelos del Todo
    return ( 
        <div>
            <h1>TodoApp ( { todos.length } ) </h1>  {/* Aqui es el length que esta en el titulo que cabia segun los todos que tenga inscritos */}
            <hr /> {/* Linea */}

            {/* Estas con las clases de bootstrap, recuerda el row es para hacer dicision de renglones y el col es para la division de la pantalla */}
            <div className="row"> 
                <div className="col-7">

                    {/* Aqui es donde estamos a la espera de que sea clickeado cualquier boton y si  */}
                    <TodoList //** Este es el nombre del componente (Asi se declaran los componentes y los componentes se pueden exportar con la palabra export y se pueden importr con la palabra import ) */
                        todos={ todos } //** Estas son las referencias, pero para que? */
                        handleDelete={ handleDelete }  //** Estas son las referencias */
                        handleToggle={ handleToggle } //** Estas son las referencias  */
                    />
                </div>

                {/* Aqui es donde se muestra lo que se va a agregar, es el input y el boton */}
                {/* Clase bootstrap */}
                <div className="col-5"> 
                    <TodoAdd //** Agregamos el componente de TodoAdd  */
                        handleAddTodo={ handleAddTodo } //** Estas son las referencias a la funcion, por consecuencia mi componente de todoAdd va a recibir la funcion ahi, para que pase por el reducer */
                    />
                </div>
                
            </div>
        </div>
    )
}