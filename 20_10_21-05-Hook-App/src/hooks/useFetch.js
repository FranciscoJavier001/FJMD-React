// Nos dice... Mira, voy a darle estas funciones y atributos a mi objeto de aqui... primero, es useRef que sea true, 
import { useState, useEffect, useRef } from 'react';

export const useFetch = ( url ) => { //** Aqui pedimos el url, y cuando lo recibimos que haga algo */
    
    const isMounted = useRef(true); //** El componente esta montado, porque efectivamente esta en true, y se esta renderizando la primera vez , que mantenga la referencia, para saber si el hook  */
    const [state, setState] = useState({data: null, loading: true, error: null}); //** Este es el estado del state, y con una peticion asincrona cambiamos el estado */

    useEffect( () => { //** Solo hazlo cuando se carge por primera vez, es un seguro al programa (1), pero cuando se desmonte, osea que haga el return el efecto se desmonte, entonces quiero cambiar el valor de ese isMountea.current = falso, hasta que lo vuelvan a llamar */
        return () => {
            isMounted.current = false;
        }
    }, [])


    useEffect( () => { //** Cuando cambie algo */

        setState({ data: null, loading: true, error: null }); //** Apenas hagas la peticion y mandame este estado */

        fetch( url ) //** Madamos el url */
            .then( resp => resp.json() ) //** Responde con una promesa y vamos a extraer el json (que se convierte en un string) */
            .then( data => { //** Esto devuelve otra promesa donde ya tenemos la data, y esta data es la respuesta del endPoint */

                // Las instrucciones de esto (2) aqui vemos como se le asignan las instrucciones a isMounted.current, osea los estados de este, uno nos dice, pero si me manda un error, cuando la data sea null, digamos que no se pudo cargar, osea la data es donde vemos si viene con info o no.
                if ( isMounted.current ) { 
                    setState({ //** Ahora esto se va a cambiar cuando reciba algo */
                        loading: false,
                        error: null,
                        data
                    });
                }
            })
            .catch( () => { //** Aqui cargamos cuando no se pueda cargar */
                setState({
                    loading: false,
                    data: null,
                    error: 'No se pudo cargar la info'
                })
            })
    },[url])

    return state; //** Retornamos el state y esta regresando solo el objeto, y ahora solo esta regresando el state */
}
