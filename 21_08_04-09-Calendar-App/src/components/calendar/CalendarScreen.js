import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'; //** Hice estas dos importaciones */
import moment from 'moment'; //** De las que dije */

import { Navbar } from '../ui/Navbar';
import { messages } from '../../helpers/calendar-messages-es'; //** Voy a hacer la importacion de messages, donde esta la configuracion del español */
import { CalendarEvent } from './CalendarEvent'; //** Este lo importamos por el componente en el event */

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
    notes: 'Comprar el pastel', //** Esta es una nueva propiedad de las notas */
    user: { //** Voy a tener el user, para saber quien creo el evento */
        _id: '123',
        name: 'Francisco'
    }
}]

export const CalendarScreen = () => {

    const [lastView, setLastView] = useState( localStorage.getItem('lastView') || 'mont' ); //** Quiero que una variable almacene el espacio cuando actualizo las cosas, y con el getItem es para ver lo que tiene, y si no tiene valor entonces que se muestre la vista del mes */

    const onDoubleClick = (e) => { //** Esta es para mostrar los eventos al hacer dobleClick */
        console.log(e);
    }

    const onSelectEvent = (e) => { //** Al hacer click se dispare el evento */
        console.log(e);
    }

    const onViewChange = (e) => { //** Para que al hacer el cambio de la vista salga el tipo de formato que es, de dia, semana etc */
        setLastView(e); //** Es para que se quede en la ultima vista, aunque lo */
        localStorage.setItem('lastView', e); //** Esto es para ver el ultimo tipo de vista */
    }

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
                onDoubleClickEvent={ onDoubleClick } //** Es para tener informacion al hacer dobleClick */
                onSelectEvent={ onSelectEvent } //** Es para que al hacer click se dispare el evento */
                onView={ onViewChange } //** Tipo de vista en la cual estamos viendolo */
                view={ lastView || 'month' } //** Es la vista que va a tener */
                components={{ //** Con esta propiedad puedo mostrar todo */
                    event: CalendarEvent //** Va a usar el CalendarEvent, porque ese va a ser el componente, pero no lo vamos a renderizar, solamente lo vamos a mandar como referencia */
                }}
            />

        </div>
    )
}