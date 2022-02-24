//**_______________________________________________________________________________________________________________________________________________*/
import { heroes } from '../data/heroes';

export const getHeroesByName = ( name = '' ) => { //** Funcion que recibe el name pero con un string vacio */

    if ( name === '' ){ //** Si name esta vacio, entonces no me regreses nada */
        return [];
    }

    name = name.toLocaleLowerCase(); //** Que el name sea igual al toLocaleLowerCase para pasarlo a minuscula */
    //** Voy a extraer todos los heroes y necesito regresar si el heroe se encontro */
    //** Filtrame el arreglo hero con su propiedad superhero, si viene incluido algo que tenga ese name */
    return heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes( name ), //** tLLC es para que sea insensible a las busquedas */
); 
}