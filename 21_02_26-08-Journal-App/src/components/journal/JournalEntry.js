import React from 'react'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { activeNote } from '../../actions/notes'

export const JournalEntry = ({ id, date, title, body, url }) => { //** Aqui voy a recibir el id, el date, title, body, url */

    const noteDate = moment( date ) //** Esto es para mostrar la fecha exacta */
    //** Esto lo hago para activar la nota */
    const dispatch = useDispatch()

    const handleEntryClick = () => { //** Y este click lo voy a manejar en en cualquier parte del JournalEntry abajo del return */
        //** Aqui voy a hacer el dispatch de la acion, que esta en notes y ees la llamada activeNote */
        dispatch(
            activeNote( id, { //** Esta pide el id, que ya lo tengo arriba y el segundo argumento va a ser todas las notas del objeto */
                date, title, body, url
            })
        )
    }

    return (
        <div className="journal__entry pointer"
            onClick={ handleEntryClick } /* Aqui voy a manjejar el evento */
        >
            { //** Solo se va a mostrar si el url existe */
                url &&
                <div 
                className="journal__entry-picture"
                style={{ //** Este tiene que ser un objeto donde especifiquemos toda la informacion del estilo que va a tener este elemento */
                    backgroundSize: 'cover',
                    backgroundImage: `url(${ url })`
            }}
            ></div>
            }

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    { title } {/* Asi le pongo el title */}
                </p>
                <p className="journal__entry-content">
                    { body } {/* Asi le pongo el body */}
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>{ noteDate.format('dddd') }</span> {/* Esto es una instancia */}
                <h4>{ noteDate.format('Do') }</h4>
            </div>

        </div>
    )
}
