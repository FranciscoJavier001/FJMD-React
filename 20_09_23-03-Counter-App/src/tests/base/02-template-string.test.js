import '@testing-library/jest-dom';
import { getSaludo } from '../../../base/02-template-string';

describe('Pruebas en 02-template-string.js', () => {
    test('getSaludo debe de retornar Hola Francisco', () => {
        
        const nombre = 'Francisco';
        const saludo = getSaludo(nombre); //** Aqui me da Francisco, porque se lo estoy pasando como argumento desde antes */

        expect(saludo).toBe('Hola ' + nombre + '!'); //** Sale positiva porque pues ya esta dado francisco */
    })

    // getSaludo debe de retornar Hola Carlos! si no hay argumento en nombre

        test('getSaludo debe de retornar Hola Carlos', () => {
        
        const saludo = getSaludo(); //** Aqui directamente esta dando el getSaludo desde el 02..... */

        expect(saludo).toBe('Hola Carlos!');
    })
    
})