import React from 'react'
import { useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm'

import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {

    //** Aqui voy a manejar el manejo de los cambios, este es un componente que va a ser un poco mas complejo, porque tiene mucha logica enuelta aqui */
    //** Primero necesito la referencia a a la nota activa, para eso voy a utilizar el useSelector y para eso voy a seleccionar los notes, asi obtengo la referencia pero solo me interesa la nota activa */
    const { active:note } = useSelector(state => state.notes ) //** Con los : renombro como quiero ponerle */
    //** Aqui voy a utilizar el useForm y este hook funciona haciendo la desestructuracion de lo que me va a regresar el useForm me regresa mis formValues y tambien el handleInputChange y el useForm recie los campos que debe tener los campos del formulario y le puedo mandar la note que tengo arriba eso haria que yo tenga la informacion en el formValues y de ahi ya la puedo extraer */
    const [ formValues, handleInputChange ] = useForm( note )

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
