//**_______________________________________________________________________________________________________________________________________________*/
const baseUrl = process.env.REACT_APP_API_URL //** http://localhost:4000/api*/
// const baseUrl = "http://localhost:4000/api"

//** fetch sin token, osea va a ser un helper */

//** endpoint=(auth o events), data=(email, password), method=get(solo si no manda nada el usuario) */
const fetchSinToken = ( endpoint, data, method = 'GET' ) => {

    const url = `${ baseUrl }/${ endpoint }` //url=localhost:4000/api/ endpoint=auth/events

    // console.log(url); //** Sale undefine por eso son importantes las .env "development, production, test" */
    
    if ( method === 'GET' ) { //** Si el metodo es exactamente igual a GET entonces */
        return fetch( url ) //** Hago el return de la peticion fetch, mandando el url, sin mas argumentos */
    } else { //** Sino */
        return fetch( url, { //** Hago el return de la peticion feth, con el url, pero ahora ya con */
            method, //** Que pueden ser todos menos GET */
            headers: { //** Lo encontramos en Postman, en Headers abajo que dice, pero tambien va el x-token */
                'Content-type': 'application/json' //** Exactamente dice esto */
            },
            body: JSON.stringify( data ) //** stringify convierte la data=(email, password) en un JSON */
        })
    }
}

const fetchConToken = ( endpoint, data, method = 'GET' ) => { //** Lo que recibe y su metodo GET */

    const url = `${ baseUrl }/${ endpoint }` //url=localhost:4000/api/ endpoint=auth/events
    console.log(url);
    const token = localStorage.getItem('token') || '' //** El token lo tengo en el localStorage, y de ahi lo le la linea 32 */

    if ( method === 'GET' ) { //** Si el metodo es exactamente igual a GET entonces */
        return fetch( url, { //** Hago el return de la peticion fetch, mandando el url, sin mas argumentos */
            method, //** Ya lo tenemod definido linea 23 */
            headers: { //** Mediante los headers voy a mandar el x-token */
                'x-token': token //** Lo lee del localStorage linea 26 */
            }
        })
    } else { //** Sino */
        return fetch( url, { //** Hago el return de la peticion feth, con el url, pero ahora ya con los heders */
            method, //** Que pueden ser todos menos GET */
            headers: { //** Lo encontramos en Postman, en Headers abajo que dice, pero tambien va el x-token */
                'Content-type': 'application/json', //** Exactamente dice esto */
                'x-token': token //** Igual x-token del localStorage linea 26 */
            },
            body: JSON.stringify( data ) //** stringify convierte la data=(email, password) en un JSON */
        })
    }
}

export { //** Lo exporto a actions>auth*/
    fetchSinToken,
    fetchConToken
}