//** Recuerda, el store es la fuente unica de la verdad */

import React from 'react'
import { useSelector } from 'react-redux'
import { JournalEntry } from './JournalEntry'

export const JournalEntries = () => { 

    const { notes } = useSelector( state => state.notes ) //** Por aqui ya o voy a mandar info prque todo esta en el store/fuente unica de la verdd */

    return (
        <div className="journal__entries">
            
            {
                notes.map( note => ( /* Voy a barrer los entries/notes, para ver cuantas tengo, asi es como se verifica la info de la base de datos */ 
                    <JournalEntry //** Aqui va el objeto que voy a retornar */
                        key={ note.id } //** Este va a ser el note.id, que lo vamos a tener desde firebase */
                        { ...note } //** Voy a extraer las propiedades que tenga la note */
                    />
                    ))
                }
        </div>
    )
}