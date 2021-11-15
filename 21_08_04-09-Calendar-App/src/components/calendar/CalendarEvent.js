//** Este va a ser un componente que va a recibir todo el evento */

import React from 'react'

export const CalendarEvent = ({ event }) => { //** Osea que recibe toda la informacion del evento */
    
    const { title, user } = event; //** Voy a tomar el arreglo del titulo, pero para eso solo lo voy a desestructurar, como en el calendarScreen, cree el user y le paso los arreglos, en el user.name */

    return (
        <div>
            <strong> { title } </strong>
            <span>- { user.name } </span> {/* Con esto voy a saber quien lo creo */}
        </div>
    )
}
