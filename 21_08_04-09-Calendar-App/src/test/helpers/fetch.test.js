//**_______________________________________________________________________________________________________________________________________________*/
//** Recuerda el .env.test */
import { fetchSinToken } from "../../helpers/fetch"

describe('Pruebas en el helper Fetch', () => {
    
    test('should fetchSinToken debe de funcionar', async() => {
        
        //** Espero una respuesta, lamo una funcion, que llama el eP, mandamos en el payload email y password, luego mandamos el metodo */
        const resp = await fetchSinToken('auth', { email: 'test@mail.com', password: '123456' }, 'POST') //** Es una promesa */
        expect( resp instanceof Response ).toBe( true ) //** Espero que sea una instancia del Response, que sea true */

        const body = await resp.json() //** Quiero el body de la resp.json (osea lo que viene) */
        expect( body.ok ).toBe( true ) //** Espera que la respesta del body sea true */
    })
    
})