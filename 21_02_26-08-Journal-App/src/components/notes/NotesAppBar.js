import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote, startUploading } from '../../actions/notes'

export const NotesAppBar = () => {

    const dispatch = useDispatch()
    const { active } = useSelector( state => state.notes ) //** Voy a extraer la nota activa, aunque ya la tenga del getState en notes */
    
    const handleSave = () => { //** Voy a hacer el dispatch de la accion, pero voy a importar de rediux el useDispatch */
        dispatch( startSaveNote( active ) )//** Despues de importarlo ya puedo hacer el dispatch del StartSaveNote */
    }

    const handlePictureClick = () => { //** No recibe nada */
        document.querySelector('#fileSelector').click() //** Wey, aqui le ponemos, mira le dimos un id, y entonces el querySelector va a buscar el id y le va a dar click */
    }

    const handleFileChange = (e) => { //** Este recibe el evento */
        const file = e.target.files[0] //** Aqui le ponemos si nos regresa algo, porque consideramos que no mande nada */
        if ( file ){
            dispatch( startUploading ( file )) //** Si tengo un archivo voy a disparar una accion, que la defini en notes, pero esta accion necesita que mandemos el file que se encuentra almacenado en el input */
        }
    }

    return (
        <div className="notes__appbar">
            <span>14 de Marzo del 2021</span>

            <input //** Wey, asi ppodemos selecionar archivos y sin problemas */
                id="fileSelector" //** Como no podia hacerle click le puse un id */
                type="file"
                name="file"
                style={{ display:'none' }} //** Asi puedo desaparecer lo que se ve jajaja */
                onChange={ handleFileChange } //** Este manejador va a mandar una funcion */
            />

            <div>
                <button
                className="btn" /* En bootstrap implementamos un boton */
                onClick={ handlePictureClick }
                >
                    Picture
                </button>

                <button
                    className="btn" /* En bootstrap implementamos un boton */
                    onClick={ handleSave }//** Voy a hacer el dispatch de la accion, osea que haccion va a hacer cuando le demos click, voy a crearme la funcion */
                >
                    Save
                </button>
            </div>
        </div>
    )
}