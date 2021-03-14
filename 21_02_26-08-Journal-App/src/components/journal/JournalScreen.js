import React from 'react'
import { NoteScreen } from '../notes/NoteScreen'
import { Sidebar } from './Sidebar' //** Para importarlo cree este componente en la carpeta de Journal y luego lo hice un rafc y luego solo lo importe aqui */
// import { NothingSelected } from './NothingSelected'

export const JournalScreen = () => {
    return (
        <div className="journal__main-content">
            
            <Sidebar /> {/* Aun no existe este componente */}

            <main> {/* Este sera nuestro contenido principal */}
                {/* <NothingSelected /> */}
                <NoteScreen /> {/* Este no va a recibir ningun argumento */}
            </main>
        </div>
    )
}
