import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote } from '../../actions/notes'

export const NotesAppBar = () => {

    const dispatch = useDispatch()
    const { active } = useSelector( state => state.notes ) //** Voy a extraer la nota activa, aunque ya la tenga del getState en notes */
    
    const handleSave = () => { //** Voy a hacer el dispatch de la accion, pero voy a importar de rediux el useDispatch */
        dispatch( startSaveNote( active ) )//** Despues de importarlo ya puedo hacer el dispatch del StartSaveNote */
    }

    return (
        <div className="notes__appbar">
            <span>14 de Marzo del 2021</span>

            <div>
                <button className="btn"> {/* En bootstrap implementamos un boton */}
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