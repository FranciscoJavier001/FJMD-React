import { useState, useEffect, useRef } from 'react';

export const useFetch = ( url ) => { //** Aqui pedimos el url, y cuando lo recibimos que haga algo */
    
    const isMounted = useRef(true);
    const [state, setState] = useState({data: null, loading: true, error: null}); //** Este es el estado del state */

    useEffect( () => { //**  */
        return () => {
            isMounted.current = false;
        }
    }, [])


    useEffect( () => { //** Cuando cambie algo */

        setState({ data: null, loading: true, error: null });

        fetch( url ) //** Madamos el url */
            .then( resp => resp.json() ) //** Responde con una promesa y vamos a extraer el json (que se convierte en un string) */
            .then( data => { //** Esto devuelve otra promesa donde ya tenemos la data, y esta data es la respuesta del endPoint */

                if ( isMounted.current ) {
                    setState({ //** Ahora esto se va a cambiar cuando reciba algo */
                        loading: false,
                        error: null,
                        data
                    });
                }

            })
            .catch( () => {
                setState({
                    data: null,
                    loading: false,
                    error: 'No se pudo cargar la info'
                })
            })

    },[url])

    return state; //** Retornamos el state y esta regresando solo el objeto, y ahora solo esta regresando el state */
}
