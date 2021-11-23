import moment from 'moment' //** Como uso moment, voy a tener que importarlo */

const initialState = { //** Va a ser un objeto */
    events: [{
         //** Estos van a ser los eventos del calendario */
         //** Este va a ser un arreglo y dentro va a tener objetos */
        title: 'Cumpleaños del jefe', //** Esto va a ser el titulo que se va a mostrar */
        start: moment().toDate(), //** Esto es cuando inicia, deberia hacerlo con moment, pero lo hace con librerias de JS, el new Data() es para saber el momento exacto, pero lo vamos a hacer con moment */
        end: moment().add( 2, 'hours' ).toDate(), //** Con esto lo finalizamos a las 2 horas despues y es algo de moment chido */
        bgcolor: '#fafafa', //** Esto solo es un background de la propiedad, el color azul */
        notes: 'Comprar el pastel', //** Esta es una nueva propiedad de las notas */
        user: { //** Voy a tener el user, para saber quien creo el evento */
            _id: '123',
            name: 'Francisco'
        }
    }],
    activeEvent: null //** Este va a ser un objeto, que va a tener todas las propiedades del evento y aqui va a venir un arreglo */
}

export const calendarReducer = ( state = initialState, action ) => { //** Va a ser una funcion de flecha, y dentro tiene el state que va a ser igual al initialState y tendriamos nuestro action */
    switch ( action.type ) {
    
        default:
            return state; //** Solo vamos a retornar el estado */
    }
}