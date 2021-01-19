import { heroes } from '../data/heroes';

export const getHeroesByPublisher = ( publisher ) => { //** Aqui exportamos la funcion de este arcivo */

    //** Aqui hacemos un arreglo en caso que la persona mande un publisher que no exista, para esto voy a hacer un arreglo */

    const validPublishers = ['DC Comics', 'Marvel Comics']; //** Cualquier cosa que no esta dentro de este arreglo va a lanzar un error */

    //** Para esto voy a barrer un arreglo con lo que debe star incluido en el publisher */
    if ( !validPublishers.includes( publisher )) { 
        //** Esto se dispara si no lo encuentra */
        throw new Error(`Publisher ${" publisher "} no es correcto`); //** Con esto lanzamos un error diciendo que no lo encontro */
    }

    //** Aqui voy a filtrar el arreglo y adentro tengo un heroe con la funcion de flecha y voy a retornar todos los hero solo si es igual al publisher que sea igual al que me esta mandando como argumento */
    return heroes.filter( hero => hero.publisher === publisher );
} 