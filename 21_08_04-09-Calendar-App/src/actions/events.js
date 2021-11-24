import { types } from "../types/types";

export const eventAddNew = (event) => ({ //** Esto recibe el evento que quiero guardar, va a ser sincrono y el objeto que voy a retornar va a ser de types */
    type: types.eventAddNew,
    payload: event
});

export const eventSetActive = (event) => ({ //** Esto recibe el evento que quiero guardar, va a ser sincrono y el objeto que voy a retornar va a ser de types */
    type: types.eventSetActive,
    payload: event
});