//**_______________________________________________________________________________________________________________________________________________*/
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../actions/auth'

export const Navbar = () => {

    const dispatch = useDispatch()
    const { name } = useSelector( state => state.auth ) //** Desestructuramos el name del state */

    const handleLogout = () => { //** Funcion que no recibe argumentos y hace el dispatch del logout */
        dispatch( startLogout() ) //** Funcion esta en actions>auth y hace las acciones ahi definidas */
        // console.log('click'); //** Asi confirmo que este funcionando el boton */
    }

    return (
        <div className="navbar navbar-dark bg-dark mb-4"> {/* Esto es el navbar, con estilos */}
            <span className="navbar-brand">
                { name } {/* Con useSelector, va arriba del state sacamos el nombre y lo mostramos */}
            </span>

            <button
                className="btn btn-outline-danger" /* btn(bootstrap), outline dibujado por fuera, danger color rojo */
                onClick={ handleLogout } //** Al hacer click llamo a este metodo */
                >
            <i className="fas fa-sign-out-alt"></i> {/* i=icon, Puerta de salida FA */}
                <span> Salir</span>
            </button>
        </div>
    )
}
