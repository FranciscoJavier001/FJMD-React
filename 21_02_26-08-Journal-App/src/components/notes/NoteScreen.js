import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { activeNote } from '../../actions/notes'
import { useForm } from '../../hooks/useForm'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {

    const dispatch = useDispatch() //** Lo mande llamar pata que este al tanto en el useEffect oara que este al tanto de los cambios */

    //** Aqui voy a manejar el manejo de los cambios, este es un componente que va a ser un poco mas complejo, porque tiene mucha logica enuelta aqui */
    //** Primero necesito la referencia a a la nota activa, para eso voy a utilizar el useSelector y para eso voy a seleccionar los notes, asi obtengo la referencia pero solo me interesa la nota activa */
    const { active:note } = useSelector(state => state.notes ) //** Con los : renombro como quiero ponerle */
    //** Aqui voy a utilizar el useForm y este hook funciona haciendo la desestructuracion de lo que me va a regresar el useForm me regresa mis formValues y tambien el handleInputChange y el useForm recie los campos que debe tener los campos del formulario y le puedo mandar la note que tengo arriba eso haria que yo tenga la informacion en el formValues y de ahi ya la puedo extraer, tambien de squi extraigo el reset */
    const [ formValues, handleInputChange, reset] = useForm( note )
    //** Ahora voy a extraer el body y el title que viene en el formValues */
    const{  body, title } = formValues; //** Voy a tomar el body y el title y lo voy a poner en sus respectivas cajas */

    //** Ahora voy a condicionar solo si el estado de la nota y solo si el estado es diferente */
    //** Para esto voy a crear un activeId que lo voy a almacenar en el useRef que es un hook de react, que me permite almacenar una variable mutable que no va a redibujar todo el componente si cambia y a donde va a apuntar va a ser al note.id */
    const activeId = useRef( note.id ) 
    //** Como no cambia el estado al hacer click en otra nota entonces voy a necesitar un efecto, osea voy a utilizar el useEffect, esto es peligroso, porque nos podria causar un error cicliclo porque va a redibujar el componente */
    useEffect(() => {
        //** Voy a comparar esta nota activa con la nota que ha cambiado en el useSelector */
        if( note.id !== activeId.current ){ //** Si son diferentes necesito resetear el formulario */
            reset( note ) //** Para esto voy mandar la nueva nota */
            activeId.current = note.id //** Asi voy a establecer un nuevo valor al activeId */
        }
    }, [note, reset]) //** Debo de manejar el note y el reset asi que aqui lo mando */

    //** Voy a hacer una peticion sincrona, para que se actualize el state, esto funciona mientras tanto porque todavia no voy a hacer el push a la base de datos */
    useEffect(() => { 
        
        //** Voy a hacer un dispatch, de la activeNote que la tengo en notes, y va a recibir el id y me pide la nota de formValues */
        dispatch( activeNote( formValues.id, { ...formValues }) )

    }, [formValues, dispatch]) //** Aqui tengo que poner la dependencia para que vea cuando hay un cambio */

    //** Ahora voy a extraer el body y el title que viene en el formValues */
    // console.log(formValues);

    return (
        <div className="notes__main-content">

            <NotesAppBar /> {/* Igual no va a recibir ningun argumento */}

            <div className="notes__content"> {/* Este va a ser el agrupador de mi formulario */}

                <input
                    type="text"
                    placeholder="Some Awesome Title"
                    className="notes__title-input"
                    autoComplete="off"
                    name="title" //** Si no lo teniamos no podiamos escribir, y asi lo tenemos que nombrar porque asi lo tenemos en la constanste desestrcturada del formValues */
                    value={ title } //** Este valor lo extraemos con el formValues */
                    onChange={ handleInputChange }//** La funcion para manejar su cambio va a ser onChange igual al handleInputChange */
                />

                <textarea
                    placeholder="What Happend Today"
                    className="notes__textarea"
                    name="body" //** Igual, si no lo teniamos no podiamos escribir, y asi lo tenemos que nombrar porque asi lo tenemos en la constanste desestrcturada del formValues */
                    value={ body } //** Este valor igual lo extraemos con el formValues */
                    onChange={ handleInputChange }
                ></textarea>

                {/* La imagen la voy a mostrar de manera condicional */}
                {
                    //** Le vamos a decir si en la note.url, entonces voy a mostrar este componente */
                    (note.url) 
                    && (
                        <div className="notes__image">
                            <img
                            src={ note.url }
                            alt="imagen"
                            />
                        </div>
                    )
                }

            </div>
            
                <button
                    className="btn btn-danger"
                >
                    Delete
                </button>
        </div>
    )
}
