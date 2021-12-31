import { fetchSinToken } from "../helpers/fetch"
import { types } from "../types/types"

//** Funcion que comienza proceso de autentificacion */
export const startLogin = ( email, password ) => { //** Exporto(mando) la funcion que va a ser asyncrona, recibe email, password */
    return async( dispatch ) => { //** Por el thunk se va a volver a disparar */
        
        // console.log(email, password); //** Para mostrarlo en consola pero desde aqui */

        //** endpoint=auth, recibe la data(desestructurada), y luego el metodo que es POST */
        const resp = await fetchSinToken( 'auth', { email, password }, 'POST' ) 
        const body = await resp.json() //** Eres igual a los parametros del resp=(name/ok/token/uid) como un json(es el msg/ok) */

        // console.log(body);

        if( body.ok ) { //** Si tenemos el ok */
            localStorage.setItem('token', body.token ) //** Voy a guardar en localStorage el token que lo tengo en el body */
            localStorage.setItem('token-init-date', new Date().getTime() ) //** token-init-date para saber la fecha de cuando se creo */

            dispatch( login({ //** Hago el dispatch al store para guardar la info Consola>Redux>state>auth linea 29 */
                uid: body.uid, //** Mando el login y recibo un objeto con el uid y el name que vienen en el body */
                name: body.name
            }) )
        }
    }
}

//** Accion sincrona, y solo la voy a usar aqui */
const login = ( user ) => ({ //** Recibo el user */
    type: types.authLogin, //** Viene de types>types que es para saber que ya se logeo el usuario */
    payload: user //** Payload es lo que se carga del usuario y si no hay nada puede omitirlo */  
})
