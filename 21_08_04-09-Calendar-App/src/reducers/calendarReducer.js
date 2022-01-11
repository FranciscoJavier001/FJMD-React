//**_______________________________________________________________________________________________________________________________________________*/
import { types } from '../types/types';

//** Referencia. Evento del calendario, es un arreglo y dentro tiene objetos */
// {
//    id: new Date().getTime(), //** Voy a tener un id */
//    title: 'Cumpleaños del jefe', //** Titulo que se va a mostrar */
//    start: moment().toDate(), //** Cuando inicia el evento */
//    end: moment().add( 2, 'hours' ).toDate(), //** Lo finalizamos a las 2 horas despues */
//    bgcolor: '#fafafa', //** Esto solo es un background de la propiedad, es color azul */
//    notes: 'Comprar el pastel', //** Esta es una nueva propiedad de las notas */
//    user: { //** user, para saber quien creo el evento */
//        _id: '123', //** Viene dentro del arreglo de user */
//        name: 'Francisco'
//    }
// }

const initialState = { //** Va a ser un objeto */
    events: [],
    activeEvent: null //** Es un objeto, que tiene todas las propiedades del evento */
}

export const calendarReducer = ( state = initialState, action ) => { //** Funcion que recibe el s=iS, y recibe el action, que son los types>types */
    switch ( action.type ) { //** switch que recibe la action de types */

        //** Lo que quiero que haga la accion */
        case types.eventSetActive: //** Cuando se reciba esta accion */
        return { //** Regresame una copia del state y quiero modificar el evento activo, que seria activeEvent */
            ...state,
            activeEvent: action.payload //** Y el activeEvent va a ser igual al action.payload */
        }

        case types.eventAddNew:
            return {
                ...state,
                events: [
                    ...state.events,
                    action.payload
                ]
            }
    
        case types.eventClearActiveEvent:
            return {
                ...state,
                activeEvent: null
            }

            case types.eventUpdated: //** Primero creo el tipo, luego recibo el state, luego creo el evento, y despues hago la accion */
                return {
                    ...state,
                     events: state.events.map( //** Voy a necesitar un map, para buscar el evento voy a actualizar y actualizarlo */
                        //** Condicion, lo ultimo es para que me mande el action.payload con toda la informacion actualizada */
                        //** En caso contrario voy a regresar el e asi como esta */ */
                        e => ( e.id === action.payload.id ) ? action.payload : e 
                        )
                }

            case types.eventDeleted:
                return {
                    ...state,
                     events: state.events.filter( //** Con el filter quiero evitar regresar el que la persona esta borrando */
                        //** El event.id debe ser diferente, pero como no tengo ningun action */
                        //** Pero tengo la informacion en el state (para saber cual es el id de la nota activa) entonces pregunto */
                        //** si el id de la nota que estoy evaluando es diferente al id de la nota que quiero eliminar que eso esta */
                        e => ( e.id !== state.activeEvent.id ) //** en el state.activeEvent.id entonces si esto es asi se van a regresar */
                        ),
                        activeEvent: null //** Voy a quitar la nota activa */
                    }

            case types.eventLoaded:
                return { //** Me retorna la copia del state, los eventos viene en el payload y asi los manejo */
                    ...state,
                    events: [ ...action.payload ] //** Voy a exparcir todos lo que venga en action.payload donde vienen los nuevos eventos */
                }

                case types.eventLogout: //** Evento para purgar el state */
                    return {
                        ...initialState //** Lo ponemos como en el estado inicial de la linea 18, desestructurcion para no mutarlo */
                    }

        default:
            return state; //** Solo vamos a retornar el state */
    }
}