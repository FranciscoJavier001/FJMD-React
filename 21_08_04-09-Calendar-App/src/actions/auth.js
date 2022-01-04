//** ________________________________________________________________________________________________________________________________________________ */
import { fetchConToken, fetchSinToken } from "../helpers/fetch"
import { types } from "../types/types"
import Swal from 'sweetalert2' //** Para las alertas */

//** Funcion que comienza proceso de autentificacion */
export const startLogin = ( email, password ) => { //** Exporto(mando) la funcion que va a ser asyncrona, recibe email, password */
    return async( dispatch ) => { //** Por el thunk se va a volver a disparar */
        
        // console.log(email, password); //** Para mostrarlo en consola pero desde aqui */

        //** endpoint=auth, recibe la data(desestructurada), y luego el metodo que es POST */
        const resp = await fetchSinToken( 'auth', { email, password }, 'POST' ) 
        const body = await resp.json() //** Es igual a los parametros del resp=(name/ok/token/uid) como un json(es el msg/ok) */

        // console.log(body);

        if( body.ok ) { //** Si tenemos el ok, osea para saber si hizo la conexion */
            localStorage.setItem( 'token', body.token ) //** Voy a guardar en localStorage el token que lo tengo en el body */
            localStorage.setItem( 'token-init-date', new Date().getTime() ) //** token-init-date para saber la fecha de cuando se creo */

            dispatch( login({ //** Hago el dispatch de la info Consola>Redux>state>auth linea 29 */
                uid: body.uid, //** Mando el login y recibo un objeto con el uid y el name que vienen en el body */
                name: body.name //** Establece el uid y el name en el store */
            }) )
        } else { //** Si escribe mal la contraseña o el usuario */
            Swal.fire('Error', body.msg, 'error') //** Primero lo que dice, segundo el msg que tengo en la base de datos, tercero tachita */
        }
    }
}

//** Funcion starRegister, solo necesitamos name, email, password */
export const startRegister = ( email, password, name ) => { //** Esta funcion la exporte en components>auth>LoginScreen */
    return async( dispatch ) => { //** Funcion Asyncrona, y el dispatch para poder disparar alguna accion, cuando tenga el usuario */

        const resp = await fetchSinToken( 'auth/new', { email, password, name }, 'POST' ) //** endPoint, variables que mandamos y methodo */
        const body = await resp.json() //** Respuesta se manda por el body>raw,>JSON, porque es el objeto con los parametros, name/ok/token/uid) */

        if( body.ok ) { //** Si el body esta entonces */
            localStorage.setItem( 'token', body.token ) //** Guardamos lo que manda en el body.token */
            localStorage.setItem( 'token-init-date', new Date().getTime() ) //** Guardamos el valor de creacion de a variable */

            dispatch( login({ //** Hacemos el dispatch del login */
                uid: body.uid, //** Estos son los parametros del login */
                name: body.name
            }) )
        } else { //** Sino tenemos el error */
            Swal.fire('Error', body.msg, 'error')
        }
    }
}


export const startChecking = () => { //** No requiere argumentos */
    return async( dispatch ) => { //** Retorno el dispatch y va a ser una tarea async */

        const resp = await fetchConToken( 'auth/renew' ) //** endPoint, no necesita ningun argumento y es un GET */
        const body = await resp.json() //** Respuesta se manda al body>raw,>JSON, porque en json tengo nuevo token */

        // console.log(body); //** Para ver la impresion en consola del body, para ver si mandamos bien los parametros */

        if( body.ok ) { //** Si el body tiene el ok entonces */
            localStorage.setItem( 'token', body.token ) //** Guardamos lo que manda en el body.token, en localStorage variable body */
            localStorage.setItem( 'token-init-date', new Date().getTime() ) //** Guardamos el valor de creacion de a variable (tiempo) */

            dispatch( login({ //** Hacemos el dispatch del login */
                uid: body.uid, //** Estos son los parametros del login, que establecen la informacion */
                name: body.name
            }) )
        } else { //** Sino tenemos el error */
            dispatch( checkingFinish() ) //** De types>types, accion para confirmar que se hizo la autentificacion si/no, de linea 76 */
        }
    }
}

const checkingFinish = () => ({ type: types.authCheckingFinish }) //** Constante que no recibe nada y retorna un objeto de types, la llamo linea 71 */

//** Accion sincrona, y solo la voy a usar aqui */
const login = ( user ) => ({ //** Recibo el user */
    type: types.authLogin, //** Viene de types>types que es para saber que ya se logeo el usuario */
    payload: user //** Payload es lo que se carga del usuario y si no hay nada puede omitirlo */  
})