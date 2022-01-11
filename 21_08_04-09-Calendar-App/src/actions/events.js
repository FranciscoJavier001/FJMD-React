//**_______________________________________________________________________________________________________________________________________________*/
import Swal from "sweetalert2";
import { fetchConToken } from "../helpers/fetch";
import { prepareEvents } from "../helpers/prepareEvents";
import { types } from "../types/types";

//** Accion que debe de llamar para inicializar el proceso de grabacion */
export const eventStartAddNew = ( event ) => { //** Recibo el evento que viene del formulario */
    return async( dispatch, getState ) => { //** Asyncrona=Disparo mediante Tong y recibo el dispatch, getState es para conseguir info de Redux */
        
        // console.log(event); //** Para ver lo que tiene el event */
        
        const { uid, name } = getState().auth //** Extraigo del State, del auth, el uid y name */
        
        try {
            //** resp viene de la configuracion de helpers>fetch, es una peticion y espero a que me sea resuelta */
            const resp = await fetchConToken('events', event, 'POST') //** 1-Endpoint "url", 2-Payload a guardar body_abajo, 3-Tipo de Peticion */
            const body = await resp.json() //** Body va a ser extraido de resp en formato json, osea String */
    
            // console.log(body); //** Si lo guarda en la base de datos y el body tiene todo */

            if ( body.ok ) { //** Osea si se inserto en la base de datos */
                event.id = body.evento.id //** Le hace falta el id */
                event.user = { //** Hace falta el id que viene en el usuario, asi que lo desestructuramos */
                    _id: uid,
                    name: name
                }
                console.log(event); //** Para ver lo que tiene el event */
                dispatch( eventAddNew( event ) ) //** Hago el dispatch de eventAddNew, me pide el event y le mando el de linea 6 */
            }
            
        } catch (error) {
            console.log(error);
        }

    }
}

//** Evento agrega uno nuevo, recibe el evento, esta definido en el types>types y el payload es el evento, graba en BD */
const eventAddNew = (event) => ({  //** eventAddNew recibe el evento, lo cambio en components>calendar>CalendarModal */
    type: types.eventAddNew, //** Este es el types, es lo que va a ser */
    payload: event //** Payload es el evento que se recibio en la funcion */
});

//** Esto recibe el evento que quiero guardar, va a ser sincrono y el objeto que voy a retornar va a ser de types */
export const eventSetActive = (event) => ({ 
    type: types.eventSetActive,
    payload: event
});

//** Lo encuentro en calendar>CalendarScreen */
export const eventClearActiveEvent = () => ({ type: types.eventClearActiveEvent, })

export const eventStartUpdate = ( event ) => { //** Debo recibir el event */
    return async( dispatch ) => { //** Async, necesito esperar unas tareas asyncronas, la disparo en components>calendar>CalendarModal */

        try {
            // console.log(event);
            const resp = await fetchConToken(`events/${ event.id }`, event, 'PUT' ) //** eP a llamar, evento que voy a guardar y tipo de peticion */
            const body = await resp.json() //** Extraigo el body */

            if ( body.ok ) { //** Si tengo el body */
                dispatch( eventUpdated( event ) ) //** Disparo evento que esta en la linea 72 y el argumento a mandar es el event de la linea 53 */
            } else {
                Swal.fire('Error', body.msg, 'error')
            }

        } catch (error) {
            console.log(error);
        }
    }
}

//** Ahora voy a crear la accion, que defini en types */
const eventUpdated = ( event ) => ({ //** Recibo el evento a actualizar y voy a regresarlo ahi, osea voy a regresar un objeto */
    type: types.eventUpdated,
    payload: event //** El payload va a ser el event */
});

export const eventStartDelete = ( event ) => { //** Necesito saber cual es el evento a borrar, lo extraigo abajo con el getState */
    return async( dispatch, getState ) => { //** Aqui lo extrai */

        const { id } = getState().calendar.activeEvent //** Desestructiro algo que viene del getState, calendar.activeEvent, de ahi saco el id */

        console.log(id);

        try {
            const resp = await fetchConToken(`events/${ id }`, {}, 'DELETE') //** 1.eP, 2.lo del body, no mando nada, 3.Tipo Peticion */
            const body = await resp.json()

            if ( body.ok ) {
                dispatch( eventDeleted() )
            } else {
                Swal.fire('Error', body.msg, 'error')
            }

        } catch (error) {
            console.log(error);
        }
    }
}

const eventDeleted = () => ({ type: types.eventDeleted })

//** Cuando se cargan los eventos del calendario */
export const eventStartLoading = () => { //** Va a obtener todos los eventos utilizando el endpoint */
    return async( dispatch ) => { //** Funcion asyncrona */

        // console.log("...");
        //** Voy a hacer la peticion de los getEvents */
        try {
            
            const resp = await fetchConToken( 'events' ) //** eP son los events, por ser peticion GET no manda nada mas */
            const body = await resp.json() //** Cuerpo va a ser en formato JSON */

            //** Constante events, igaual a pE que va a ser lo que viene en el body.events helpers>prepareEvents */
            const events = prepareEvents( body.eventos )
            
            // console.log(body); //** Asi muestro los eventos en consola */
            // console.log(events); //** Para ver que si tengo los eventos en consola */
            
            dispatch( eventLoaded( events ) )//** Llamo el dispatch de los eL mandando los eventos, para que los tenga en el store */

        } catch (error) {
            console.log(error);
            
        }
    }
}

//** Accion que voy a disparar al reducer, solo trabajara aqui, al hacerla la configuro en el reducer */
const eventLoaded = ( event ) => ({ //** Recibo los eventos, va a retornar un objeto y payload son los eventos */
    type: types.eventLoaded,
    payload: event
}) 

export const eventLogout = () => ({ //** retorno un objeto que va a ser type: types.eventLogout */
    type: types.eventLogout
}) 