import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'; //** Hice estas dos importaciones */
import moment from 'moment'; //** De las que dije */

import { Navbar } from '../ui/Navbar';
import { messages } from '../../helpers/calendar-messages-es'; //** Voy a hacer la importacion de messages, donde esta la configuracion del español */

import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/es';

moment.locale('es'); //** Esto es para cambiarle el texto al español */

const localizer = momentLocalizer(moment); //** Esto lo copie, y simplemente lo puse despues de las importaciones */

//** Los eventos pueden lucir como nosotros queramos, pero debe tener ciertas caracteristicas, para que este big-calendar lo pueda interpretar */
const events = [{ //** Este va a ser un arreglo y dentro va a tener objetos */
    title: 'Cumpleaños del jefe', //** Esto va a ser el titulo que se va a mostrar */
    start: moment().toDate(), //** Esto es cuando inicia, deberia hacerlo con moment, pero lo hace con librerias de JS, el new Data() es para saber el momento exacto, pero lo vamos a hacer con moment */
    end: moment().add( 2, 'hours' ).toDate(), //** Con esto lo finalizamos a las 2 horas despues y es algo de moment chido */
    bgcolor: '#fafafa', //** Esto solo es un background de la propiedad, el color azul */
    notes: 'Comprar el pastel' //** Esta es una nueva propiedad de las notas */
}]

export const CalendarScreen = () => {

    const eventStyleGetter = ( event, start, end, isSelected ) => { //** Esta funcion se va a disparar con el event, start, end, isSelected */
        
        const style = { //** Este va a ser un objeto que va a tener las propiedades de aqui abajo */
            backgroundColor: '#367CF7',
            borderRadius: '0px',
            opacity: 0.8,
            display: 'block',
            color: 'white'
        }

        return {
            style
        }
    }

    return (
        <div className="calendar-screen"> {/* Aqui le voy a poner un nuevo estilo por eso hago una nueva clase */}
            <Navbar />

            <Calendar
                localizer={ localizer } //** Esto lo copiamos de arriba */
                events={ events } //** Esos eventos son los que voy a mandar aqui, los que puse en la linea 10 */
                startAccessor="start"
                endAccessor="end"
                messages={ messages } //** Esto lo voy a mandar al messages */
                eventPropGetter={ eventStyleGetter } //** Estos son disparados por este calendario, y aqui solo estoy pasando la referencia */
            />

        </div>
    )
}