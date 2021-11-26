import { types } from "../types/types";

export const eventAddNew = (event) => ({ //** Esto recibe el evento que quiero guardar, va a ser sincrono y el objeto que voy a retornar va a ser de types */
    type: types.eventAddNew,
    payload: event
});

export const eventSetActive = (event) => ({ //** Esto recibe el evento que quiero guardar, va a ser sincrono y el objeto que voy a retornar va a ser de types */
    type: types.eventSetActive,
    payload: event
});

export const eventClearActiveEvent = () => ({ type: types.eventClearActiveEvent, })

//** Ahora voy a crear la accion, que defini en types */
export const eventUpdated = ( event ) => ({ //** Aqui voy a recbir el evento que quiero actualizar y voy a regresarlo de esa misma vez, osea voy a regresar un objeto */
    type: types.eventUpdated,
    payload: event //** El payload va a ser el event */
});

export const eventDeleted = () => ({ type: types.eventDeleted })