//**_______________________________________________________________________________________________________________________________________________*/
//** Asi es como nos vamos a ayudar para filtrar la informacion */
import { heroes } from '../data/heroes';

export const getHeroById = ( id ) => { //** Exportamos una funcion que recibe el id */

    //** Con el find apenas encuentre uno eso seria todo, con estas dos funciones trabajamos con la informacion */
    return heroes.find( hero => hero.id === id ); //** hero recibe el hero.id a traves de la l5 y que sea igual al id */
}