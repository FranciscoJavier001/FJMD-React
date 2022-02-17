import { retornaArreglo } from '../../../base/07-deses-arr';

describe('Pruebas en desestructuracion ', () => {
    test('debe de retornas un string y un numero ', () => {
        
        const [letras, numeros] = retornaArreglo() //['ABC', 123]; //** Podemos hacer desestructuraciones de funciones que vengan desde otro lado */

        // console.log(typeof numeros);

        expect(letras).toBe('ABC'); //** Hacemos la comparacion que queramos */
        expect(typeof letras).toBe('string');

        expect(numeros).toBe(123); //** Hacemos la comparacion que queramos */
        expect(typeof numeros).toBe('number');
    })
    
})
