const { getHeroeById, getHeroeByOwner } = require("../../../base/08-imp-exp");
const { default: heroes } = require("../../../data/heroes");

describe('Pruebas en funciones de Heroes', () => { //** Se describe la prueba */
    test('debe de retornar un heroe por id ', () => { //** Solo vamos a hacer que se conecte y ver que reciba cada id que se le manda */
        
        const id = 1; //** Creamos una constante */
        const heroe = getHeroeById(id); //** Aqui importamos la funcion getHeroeById que recibe el parametro de 1 */
        console.log(heroe.id);

        const heroeData = heroes.find(h => h.id === id); //** metodo find creamos el parametro h que va a recibir el 'id creado arriba', y debe ser igual al id */
        console.log(heroeData.id);
        
        expect(heroe).toEqual(heroeData) //** Si me retorna el id de un heroe y aqui forzamos la igualdad */
    });

    test('debe de retornar un undefined si heroe no existe ', () => { 
        
        const id = 10; //** Ese numero no esta en heroes */
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined)
    });

    // debe de retornar un arreglo con los heroes de DC
    test('debe de retornar un arreglo con los heroes de DC ', () => { //** Que quiero que haga la prueba */
        
        const owner = 'DC'; //** El owner va a ser DC que aqui lo declaramos */
        const heroes = getHeroeByOwner(owner); //** Aqui ponemos lo declarado arriba que va a ser 'DC' y owner viene en heroes.js*/
        
        const heroesData = heroes.filter(h => h.owner === owner); //** Filtramos los heroes de DC */
        console.log(heroesData); //** Vemos el resultado en consola */

        expect(heroes).toEqual(heroesData);
    })
    
    test('debe de retornar un arreglo con los heroes de Marvel ', () => { //** Deben ser 2 heroes de Marvel */
        const owner = 'Marvel'; //** Declaramos */
        const heroes = getHeroeByOwner(owner); //** Que sean de Marvel */
        console.log(heroes);

        expect(heroes.length).toBe(2); //** Comparamos que sean los 2 */
    })
})
