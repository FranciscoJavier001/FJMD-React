//**_______________________________________________________________________________________________________________________________________________*/
//** Asi es como nos vamos a ayudar para filtrar la informacion */
import { heroes } from '../data/heroes'; //** Necesito la referencia a los heroes */

export const getHeroesByPublisher = ( publisher ) => { //** Exportamos la funcion de este arcivo y vamos a recibir el publisher */

    //** Aqui hacemos un arreglo en caso que la persona mande un publisher que no exista, para esto voy a hacer un arreglo */
    const validPublishers = ['DC Comics', 'Marvel Comics']; //** Cualquier cosa que no esta dentro de este arreglo va a lanzar un error */

    //** Para esto voy a barrer un arreglo con lo que debe estar incluido en el publisher */
    if ( !validPublishers.includes( publisher )) { //** Ejecuta lo que esta en parentesis, si no estan los vP incluidos en publisher */
        throw new Error(`Publisher "${ publisher }" no es correcto`); //** Se dispara diciendo que no lo encontro, si esta mal en Marvel/DC-Screen */
    }

    //** En caso contrario filtramos el arreglo, adentro tengo un hero y retornarno todos los heroes que tengan el mismo publisher del argumento */
    return heroes.filter( hero => hero.publisher === publisher ); //** Recibo hero es una funcion de flecha que tiene atributos l5 */
} 