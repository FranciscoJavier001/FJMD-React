import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { JournalEntries } from './JournalEntries'
import { startLogout } from '../../actions/auth'
import { startNewNote } from '../../actions/notes'

export const Sidebar = () => {

    //** Voy a empezar creando el eventListener (osea ponte listo si escuchas un cambio) */

    //** Hay que hacer un dispatch de la accion cuando se toque el boton */
    const dispatch = useDispatch()
    //** Para poner el nombre del usuario logeado usaremos el useSelector */
    const { name } = useSelector( state => state.auth ) //** Es lo que venga en el auth, y lo que me interesa es el displayName */

    const handleLogout = () => { //** Una funcion de flecha que no recibe ningun argumento, de igual manera voy a asignar el evento al boton */
        dispatch( startLogout() ) //** Ya hice el dispatch del logout */
    }

    const handleAddNew = () => { //** Esta es una funcion de flecha que no recibe nada y va a hacer el dispatch de una accion que voy a definir en los types que estan dentro de src */
        dispatch( startNewNote() ) //** Parentesis porque no recibe ningun argumento y guardo los cambios */
    }

    return (
        <aside className="journal__sidebar"> {/* El aside indica que esto esta en un costado y le asignamos una clase para ponerla con scss */}
            
            <div className="journal__sidebar-navbar">
                <h3 className="mt-5"> {/* Hicimos una separacion hacia abajo para que no se viera tan arriba */}
                    <i className="far fa-moon"></i>
                    <span> { name } </span>
                </h3>

                <button
                    className="btn"
                    onClick={ handleLogout } /* Le asigno una accion a este boton */
                >
                    Logout
                </button>
            </div>

            <div 
                className="journal__new-entry"
                onClick={ handleAddNew } /* Le doy funcionalidad del click, y como no esta implementado lo defino arriba */ 
            >
                <i className="far fa-calendar-plus fa-5x"></i> {/* Con esto creo un calendario, es de font awesome */}
                <p className="mt-5"> {/* Para hacer una separacion del New Entry hacia arriba */}
                    New Entry
                </p>
            </div>

            <JournalEntries />
        </aside>
    )
}
