import React from 'react'
import moment from 'moment'

export const JournalEntry = ({ id, date, title, body, url }) => { //** Aqui voy a recibir el id, el date, title, body, url */

    const noteDate = moment( date ) //** Esto es para mostrar la fecha exacta */

    return (
        <div className="journal__entry pointer">
            
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
