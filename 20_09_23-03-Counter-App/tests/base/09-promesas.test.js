//** Estas deben de ser tareas asyncronas, osea que sean secuencia por secuencia */

const { getHeroeByIdAsync } = require("../../base/09-promesas");
const { default: heroes } = require("../../data/heroes");

describe('Pruebas con promesas', () => {
    test('getHeroeByIdAsync debe de retornar un Heroe Async ', (done) => {
        const id = 1;

        getHeroeByIdAsync(id) //** Esta es una promesa porque usa el then en caso que no se arme */
        .then(heroe => {
            expect(heroe).toBe(heroes[0]); //** Aqui estoy esperando que retorne batman */
            console.log(heroe);
            done(); //** Siempre hay que llamar al done para decirle que termine de hacer todo el proceso */
        });
    });

    // test('debe de obtener un error si el heroe por id no existe ', (done) => { //** Este es para que me de un error */
    //     const id = 1;
    //     getHeroeByIdAsync(id)
    //     .catch(error => { //** Aqui ponemos el catch para esperar la falla */
    //         expect(error).toBe('no se pudo encontrar el heroe!!!');
    //         done();
    //     });
    // });
    
    
})
