import '@testing-library/jest-dom';

import { getUser, getUsuarioActivo } from '../../../base/05-funciones'

describe('Pruebas en 05-funciones', () => { //** Descripcion de la prueba */

    test('getUser debe de retornar un objeto  ', () => { //** Lo que se va a probar */

        const userTest = { //** Esta funcion retorna un objeto */
         uid: 'ABC123',
         username: 'El_Papi1502'
    }
    
    const user = getUser();
    //** getUser = uid: 'ABC123', username: 'El_Papi1502' */

    expect(user).toEqual(userTest);
})

    test('getUsuarioActivo debe de retorna un objeto', () => {
        const nombre = 'Juan';
        const user = getUsuarioActivo(nombre);
        //** getUsuarioActivo = uid: 'ABC567', username: nombre */

        expect(user).toEqual({ //** Este operador es de Debe ser Equal, osea mas que igual */
            uid: 'ABC567',
            username: nombre
        });
    })
})
