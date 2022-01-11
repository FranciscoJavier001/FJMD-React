//**_______________________________________________________________________________________________________________________________________________*/
import React from 'react'
import { useDispatch } from 'react-redux'
import { eventStartDelete } from '../../actions/events';

export const DeleteEventFab = () => {

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch( eventStartDelete() ) //** Esta la hicimos en los events y borramos la pasada, que la dejamos local */
    }

    return (
        <button
            className="btn btn-danger fab-danger"
            onClick={ handleDelete }
        >
            <i className="fas fa-trash"></i>
            <span> Borrar Evento </span>
        </button>
    )
}
