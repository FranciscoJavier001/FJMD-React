import React from 'react'
import { useSelector } from 'react-redux'
import { NoteScreen } from '../notes/NoteScreen'
import { Sidebar } from './Sidebar' //** Para importarlo cree este componente en la carpeta de Journal y luego lo hice un rafc y luego solo lo importe aqui */
import { NothingSelected } from './NothingSelected'

export const JournalScreen = () => {

    //** Osea si tenemos una nota activa, vamos a extraer algo del store o del state y voy a utilizar el useSelector */
    const { active } = useSelector(state => state.notes) //** En lo primero voy a extraer del notes el active, y lo extraigo del state */
    return (
        <div className="journal__main-content">
            
            <Sidebar /> {/* Aun no existe este componente */}

            <main> {/* Este sera nuestro contenido principal */}
            {
                (active !== null) //** Aqui voy a mostrar un componente, si la nota tiene algo, voy a usar un ternario y si tengo algo seleccionado voy a regresar el notesScreen, que hay voy a mostrar la informacion de la nota y si no tenemos nada, vamos a seleccionar el nothingSelected */
                ? ( <NoteScreen /> ) //** Dice que no va a recibir ningun argumento */
                : <NothingSelected /> 
            }
            </main>
        </div>
    )
}
