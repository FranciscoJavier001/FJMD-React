import React from 'react'
import { Sidebar } from './Sidebar' //** Para importarlo cree este componente en la carpeta de Journal y luego lo hice un rafc y luego solo lo importe aqui */

export const JournalScreen = () => {
    return (
        <div className="journal__main-content">
            
            <Sidebar /> {/* Aun no existe este componente */}

            <main> {/* Este sera nuestro contenido principal */}
                <h1> Main Content </h1>
            </main>
        </div>
    )
}
