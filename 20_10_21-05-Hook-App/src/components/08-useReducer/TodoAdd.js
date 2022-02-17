import React from 'react'
import { useForm } from '../../hooks/useForm';

// Exportamos el TodoAdd a TodoApp
export const TodoAdd = ({ handleAddTodo }) => { 

    // Este es el estado del formulario 
    const [ { description }, handleInputChange, reset ] = useForm({
        description: ''
    });

    // Va a ser igual a una funcion que recibe el event 
    const handleSubmit = (e) => { 
        e.preventDefault(); //** Con eso detengo la propagacion del formulario que se envia por el handlesubmit*/

        // Si la tarea es menor o igual a una no hagas nada
        if ( description.trim().length <= 1 ) { 
            return;
        }

        //** Creado el newTodo con la descripcion  */
        const newTodo = {
            id: new Date().getTime(), //** milisegundos */
            desc: description,
            done: false
        };
        handleAddTodo( newTodo ); //** Este lo va a llamar mandando el newTodo, no voy a mandar la accion, voy a mandar el newTodo */
        reset(); //** El reset del formulario es el que limpia el campo del imput donde dice aprender */
    }

    return (
        // fragment
        <> 
        {/* Titulo */}
            <h4>Agregar Tarea</h4> 
            {/* linea */}
            <hr /> 

            {/* El formulario tiene un submit, que al apretarle va a mandar el formulario, pero sin que la pagina se recarge */}
            <form onSubmit={ handleSubmit }>  

                <input //** Este es el campo de texto */
                    type="text"
                    name="description"
                    className="form-control" //** Para que use todo el espacio */
                    placeholder="Ingresa alguna Actividad ..."
                    autoComplete="off"
                    value={ description } //** Esto significa que se limpie el input */
                    onChange={ handleInputChange } //** Esto bloquea para que no se pueda escribir en el input  */
                />

                <button
                    type="submit" //** Tipo de boton */
                    className="btn btn-outline-primary mt-1 btn-block" //** Clase bootstrap */
                >
                    {/* Como se va a llamar */}
                    Agregar
                </button>
            </form>           
        </>
    )
}