//**_______________________________________________________________________________________________________________________________________________*/
//** Recuerda el .env.test */
import { fetchConToken, fetchSinToken } from "../../helpers/fetch"

describe('Pruebas en el helper Fetch', () => {

    let token = ''; //** Es de la linea 20 */
    
    test('fetchSinToken debe de funcionar', async() => {
        
        //** Espero una respuesta, lamo una funcion, que llama el eP, mandamos en el payload email y password, luego mandamos el metodo */
        const resp = await fetchSinToken('auth', { email: 'test@mail.com', password: '123456' }, 'POST') //** Es una promesa */
        expect( resp instanceof Response ).toBe( true ) //** Espero que sea una instancia del Response, que sea true */

        const body = await resp.json() //** Quiero el body de la resp.json (osea lo que viene) */
        expect( body.ok ).toBe( true ) //** Espera que la respesta del body sea true */

        // console.log(body.token); //** Para ver el token que esta dentro del body */
        
        token = body.token; //** Le asigno un nombre a la variable del token que viene en el body */
    })

    test('fetchConToken debe de funcionar', async() => { 
        
        // console.log(token); //** Nos mostramos de nuevo el token */

        localStorage.setItem( 'token', token ); //** Aqui grabo el token en el lS, para que exista cuando haga la peticion */

        //** Llamo al eP de EliminarEvento pta ver si sirve el fCT */
        const resp = await fetchConToken('events/61c77cf504ec5b67bbcdc7e0', {}, 'DELETE') //** Mando eP, body como un objeto vacio y metodo "/" */
        const body = await resp.json() //** Constante que va a ser la respuesta en formato json */

        console.log(body); //** Para ver lo que viene en el body */

        expect( body.msg ).toBe( 'Evento no existe por ese id' )
    })
})