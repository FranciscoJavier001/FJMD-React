//**_______________________________________________________________________________________________________________________________________________*/
import moment from 'moment'

export const prepareEvents = ( events = [] ) => { //** Funcion que modifica los eventos, los recibe pero los igualamos a un objeto vacio */
    
    // console.log(events);
    
    return events.map( //** Regreso los eventos y recibo un array con los resultados */
        (e) => ({ //** Recibo evento y regreso el nuevo objeto que forma parte del arreglo */
            ...e, //** Va a tener todas las mismas propiedades */
            end: moment( e.end ).toDate(), //** Modifico fechas, end sera instancia de moment mandando e.end y lo procesa con el .toDate */
            start: moment( e.start ).toDate(),
        })
    )
}