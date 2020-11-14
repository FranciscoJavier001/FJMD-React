import  { getHeroeById } from '../base/08-imp-exp';

export const getHeroeByIdAsync = (id) => {

    return new Promise((resolve, reject) => { //** Nueva promesa */

        setTimeout(() => {  //** Solo pedimos que nos resuleva si se puede encontrar un heroe */
            // Tarea
            // importen el
            const p1 = getHeroeById(id);
            if(p1){
                resolve(p1);
            } else {
                reject('No se pudo encontrar el heroe')
            }
        }, 50)
    });
}