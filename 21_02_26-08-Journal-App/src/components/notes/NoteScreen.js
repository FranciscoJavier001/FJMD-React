import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm'

import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {

    //** Aqui voy a manejar el manejo de los cambios, este es un componente que va a ser un poco mas complejo, porque tiene mucha logica enuelta aqui */
    //** Primero necesito la referencia a a la nota activa, para eso voy a utilizar el useSelector y para eso voy a seleccionar los notes, asi obtengo la referencia pero solo me interesa la nota activa */
    const { active:note } = useSelector(state => state.notes ) //** Con los : renombro como quiero ponerle */
    //** Aqui voy a utilizar el useForm y este hook funciona haciendo la desestructuracion de lo que me va a regresar el useForm me regresa mis formValues y tambien el handleInputChange y el useForm recie los campos que debe tener los campos del formulario y le puedo mandar la note que tengo arriba eso haria que yo tenga la informacion en el formValues y de ahi ya la puedo extraer, tambien de squi extraigo el reset */
    const [ formValues, handleInputChange, reset] = useForm( note )


    //** Ahora voy a condicionar solo si el estado de la nota y solo si el estado es diferente */
    //** Para esto voy a crear un activeId que lo voy a almacenar en el useRef que es un hook de react, que me permite almacenar una variable mutable que no va a redibujar todo el componente si cambia y a donde va a apuntar va a ser al note.id */
    const activeId = useRef( note.id ) 
    //** Como no cambia el estado al hacer click en otra nota entonces voy a necesitar un efecto, osea voy a utilizar el useEffect, esto es peligroso, porque nos podria causar un error cicliclo porque va a redibujar el componente */
    useEffect(() => {
        //** Voy a comparar esta nota activa con la nota que ha cambiado en el useSelector */
        if( note.id !== activeId.current ){ //** Si son diferentes necesito resetear el formulario */
            activeId.current = note.id //** ASi voy a establecer un nuevo valor al activeId */
            reset( note ) //** Para esto voy mandar la nueva nota */
        }
    }, [note, reset]) //** Debo de manejar el note y el reset asi que aqui lo mando */

    //** Ahora voy a extraer el body y el title que viene en el formValues */
    console.log(formValues);
    const{  body, title } = formValues; //** Voy a tomar el body y el title y lo voy a poner en sus respectivas cajas */
    

    return (
        <div className="notes__main-content">

            <NotesAppBar /> {/* Igual no va a recibir ningun argumento */}

            <div className="notes__content"> {/* Este va a ser el agrupador de mi formulario */}

                <input
                    type="text"
                    placeholder="Some Awesome Title"
                    className="notes__title-input"
                    autoComplete="off"
                    value={ title } //** Este valor lo extraemos con el formValues */
                    onChange={ handleInputChange }//** La funcion para manejar su cambio va a ser onChange igual al handleInputChange */
                />

                <textarea
                    placeholder="What Happend Today"
                    className="notes__textarea"
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
                            src="https://image.freepik.com/foto-gratis/silueta-mujer-joven-meditando-practicando-yoga-playa-al-atardecer_35708-291.jpg"
                            alt="imagen"
                            />
                        </div>
                    )
                }

            </div>
            
        </div>
    )
}
