import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

import '../02-useEffect/effects.css';

export const MultipleCustomHooks = () => {

    const { counter, increment } =  useCounter(1); //** Esto me regresa el counter con todas las variales almacenadas en el, pero viene indluido el increment en una funcion donde solo me interesa el increment y estos estan definidos en useCounter en la funcion useCounter en que viene */
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`); //** Aqui se va a hacer la peticion, y regresa un state, pero desestructuramos el state y solo me queda el loading y la data */
    
    const { author, quote } = !!data && data[0]; //** author y quotes viene del objeto directamente y esto va a ser igual que si viene la data como true, entonces extrae la data en la posicion 0 */

    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr />

            { //** Preguntamos, si el loading se esta cargando (para eso se utiliza el ?) entonces regreso el objeto de loading, en caso contrario con (: los dos puntos son para decir en caso contrario) que se muestre el blockquote */
                loading 
                ?
                    (
                        // Es una division donde siempre va a estar una barra verde diciendo loading
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )
                :
                    (
                        // Diseñamos al lado derecho una cita, la p es para mostrar un parrafo, ahi va a estar la frase y el footer es donde va a salir el autor
                        <blockquote className="blockquote text-right">
                            <p className="mb-0">{quote}</p>
                            <footer className="blockquote-footer">{author}</footer>
                        </blockquote>
                    )
            }

            {/* Un boton, que va a estar aumentando el contador */}
            <button 
                className="btn btn-primary"
                onClick={ increment } //** Aqui desde el useCounter ya tenemos definida la funcion que va a aumentar en 1, osea al hacer click ya esta la logica implementada */
            >
                Siguiente quote
            </button>

        </div>
    )
}