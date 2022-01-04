//** ________________________________________________________________________________________________________________________________________________ */
import React from 'react'
import { useDispatch } from 'react-redux'
import { uiOpenModal } from '../../actions/ui';

export const AddNewFab = () => {

    const dispatch = useDispatch();

    const handleClickNew = () => { //** No recibo ningun argumento */
        dispatch( uiOpenModal() ) //** Y el Dispatch solo va a ser el uiOpenModal reducers>uiReducer */
    }

    return (
        <button
            className="btn btn-primary fab"
            onClick={ handleClickNew }//** Asocio el metodo en el onClick */
        >
            <i className="fas fa-plus"></i>
        </button>
    )
}
