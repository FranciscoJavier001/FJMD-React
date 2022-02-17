import { heroes } from '../data/heroes';

export const getHeroById = ( id ) => { //** Aqui exportamos la funcion de este arcivo */

    //** Con el find apenas encuentre uno eso seria todo, con estas dos funciones trabajamos con la informacion */
    return heroes.find( hero => hero.id === id );
}