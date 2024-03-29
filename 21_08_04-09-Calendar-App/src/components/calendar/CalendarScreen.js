//** ________________________________________________________________________________________________________________________________________________ */
import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'; //** Hice estas dos importaciones */
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'; //** De las que dije */

import { Navbar } from '../ui/Navbar';
import { messages } from '../../helpers/calendar-messages-es'; //** Importacion de messages, ahi esta la configuracion del español */
import { CalendarEvent } from './CalendarEvent'; //** Este lo importamos por el componente en el event */
import { CalendarModal } from './CalendarModal';

import { uiOpenModal } from '../../actions/ui';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/es';
import { eventClearActiveEvent, eventSetActive, eventStartLoading } from '../../actions/events';
import { AddNewFab } from '../ui/AddNewFab';
import { DeleteEventFab } from '../ui/DeleteEventFab';
import { useEffect } from 'react';

moment.locale('es'); //** Esto es para cambiarle el texto al español */

const localizer = momentLocalizer(moment); //** Esto lo copie, y simplemente lo puse despues de las importaciones */

export const CalendarScreen = () => {

    const dispatch = useDispatch(); //** Asi no tengo que importar nada mas, solo resta hacer el dispatch de la respectiva accion */
    const { events, activeEvent } = useSelector( state => state.calendar ) //** Primero voy a extraer los events del state del calendario */
    const { uid } = useSelector( state => state.auth ) //** Leo el uid del state.auth */

    //** lastView almacena la ultima vista, el setLastView actualiza el estado del componente, useState le digo cual va a ser su estado inicial */
    const [lastView, setLastView] = useState( localStorage.getItem('lastView') || 'month' ); //** gI es para ver lo que tiene, ultima vista o mes */

    useEffect(() => { //** Lo voy a ejecutar 1 vez */

        dispatch( eventStartLoading() ) //** Disparo eSL, no necesita argumento porque solo ocupa el token */
    }, [ dispatch ]) //** Unica dependencia que tiene es el dispatch, aunque nunca va a cambiar */

    const onDoubleClick = (e) => { //** Esta es para mostrar los eventos al hacer dobleClick */
        // console.log(e);
        dispatch( uiOpenModal() ) //** No recibe ningun argumento, pero este se dispara */
    }

    const onSelectEvent = (e) => { //** Al hacer click se dispare el evento */
        dispatch( eventSetActive( e ) ) //** Hacemos el dispatch de un evento, y el evento es e, pero falta ponerle accion en el calendarReducer */
    }

    const onViewChange = (e) => { //** Para que al hacer el cambio de la vista salga el tipo de formato que es, de dia, semana etc */
        setLastView(e); //** Es para que se quede en la ultima vista */
        localStorage.setItem('lastView', e); //** Esto es para ver el ultimo tipo de vista */
    }

    const onSelectSlot = (e) => {
        // console.log(e);
        dispatch( eventClearActiveEvent() )
    }

    const eventStyleGetter = ( event, start, end, isSelected ) => { //** Esta funcion se va a disparar con el event, start, end, isSelected */
        
        // console.log(event); //** Mostramos el evento */

        const style = { //** Este va a ser un objeto que va a tener las propiedades de aqui abajo */
            //** Voy a preguntar mediante un ternario para que el background cambie de color */
            //** Si el uid es exactamente igual al event.user.id voy a colocar el color azul, pero en caso contarrio pongo el gris */
            backgroundColor: ( uid === event.user._id ) ? '#367CF7' : '#465660',
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

            <Calendar //** En las pruebas esto es un componente */
                localizer={ localizer } //** Esto lo copiamos de arriba */
                events={ events } //** Esos eventos son los que voy a mandar aqui, los que puse en la linea 10 */
                startAccessor="start"
                endAccessor="end"
                messages={ messages } //** Esto lo voy a mandar al messages */
                eventPropGetter={ eventStyleGetter } //** Estos son disparados por este calendario, y aqui solo estoy pasando la referencia */
                onDoubleClickEvent={ onDoubleClick } //** Es para tener informacion al hacer dobleClick */
                onSelectEvent={ onSelectEvent } //** Es para que al hacer click se dispare el evento */
                onView={ onViewChange } //** Tipo de vista en la cual estamos viendolo */
                onSelectSlot={ onSelectSlot }
                selectable={ true }
                view={ lastView || 'month' } //** Es la vista que va a tener */
                components={{ //** Con esta propiedad puedo mostrar todo */
                    event: CalendarEvent //** CalendarEvent es el componente, no se renderizar, solamente se manda como referencia */
                }}
            />

            <AddNewFab />

            {
                (activeEvent) && <DeleteEventFab />
            }

            <CalendarModal /> {/* Este componente lo acabo de crear y lo importe */}

        </div>
    )
}