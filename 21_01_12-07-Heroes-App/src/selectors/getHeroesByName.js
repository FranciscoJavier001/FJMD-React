import { heroes } from '../data/heroes';

export const getHeroesByName = ( name = '' ) => { //** Esto recibe un argumento que va a ser el name, y si el name no recibe ningun argumento que nos regrese todo */

    //** Este If es en caso que no reciba nada, que me regrese un arreglo vacio, si no tiene nada debe de utilizar el filtro */
    if ( name === '' ){
        return [];
    }

    name = name.toLocaleLowerCase(); //** Que el name sea igual al toLocaleLowerCase para pasarlo a minuscula */
    return heroes.filter( hero => hero.superhero.toLocaleLowerCase().includes( name )); //** Para filtrar los heroes, vamos a extraer todos los heroes con funcion de flecha y vamos a regresar el hero.superhero.toLocaleLowerCase "para que sea insensible a las busquedas", para qe con el includes el nombre que tenga como argumento lo regrese */
}