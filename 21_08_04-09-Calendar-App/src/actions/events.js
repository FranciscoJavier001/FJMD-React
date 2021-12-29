import { types } from "../types/types";

//** Exportamos el evento que agrega uno nuevo, este recibe el evento, esta definido en el types>types y el payload es el evento */
export const eventAddNew = (event) => ({  //** eventAddNew recibe el evento */
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

//** Ahora voy a crear la accion, que defini en types */
export const eventUpdated = ( event ) => ({ //** Aqui voy a recbir el evento que quiero actualizar y voy a regresarlo de esa misma vez, osea voy a regresar un objeto */
    type: types.eventUpdated,
    payload: event //** El payload va a ser el event */
});

export const eventDeleted = () => ({ type: types.eventDeleted })