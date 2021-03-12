import React from 'react'
import { JournalEntry } from './JournalEntry'

export const JournalEntries = () => {

    const entries = [1,2,3,4,5] //** Esta la vamos a jalar de una base de datos que aun no se crea */

    return (
        <div className="journal__entries">
            
            {
                entries.map( value => ( /* Voy a barrer los entries, para ver cuantas tengo, asi es como se verifica la info de la base de datos */ 
                    <JournalEntry key={ value } /> //** Aqui va el objeto que voy a retornar */
                    ))
                }
        </div>
    )
}