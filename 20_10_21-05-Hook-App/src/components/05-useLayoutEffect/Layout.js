// LayOutEffect solo se ejecuta 1 vez hasta que todos los componentes del DOM se cargen
// Este es el cascaron de MultipleCustomHooks, se hizo un copy/paste y este codigo significa, que la raiz de esto es useCounternos regresa ek useCounter con valor 1, que tiene que tener el counter y el increment ya establecido

import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

import './layout.css';

export const Layout = () => { //** Vamos a hacerlo publico Layout y va a tener (1), mira.. la estamos pidiendo en el index, ahi la exportamos, y la exportamos con estas funciones establecidas */

    const { counter, increment } =  useCounter(1); //** Voy a pedirle datos al useCounter, que es el contador ya establecido que lo puedo usar bien facil, con todas sus funciones definidas, que las definieron en useCounter, que es la data establecida por default, con una funcion de incrementador */
    const { data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${ counter }` ); //** mira, ahora con el useFetch, y va a estar recibiendo la data del useFetch y hasta le agregas el contador   */
    
    const { quote } = !!data && data[0]; 

    const pTag = useRef(); //** Es para mantener una referencia, que nombro como pTag que esta en la referencia de la linea 35 */
    const [ boxSize, setBoxSize ] = useState({}); //** Declaramos una variable donde almacene el tamaño de la caja */

    useLayoutEffect( () =>  { //** Esto es cuando se ha renderizado el html */

        setBoxSize( pTag.current.getBoundingClientRect() ); //** Esto me da el tamaño de la caja de texto, osea del pTag nuevo al cambiar la frase */

    },[quote]) //** Si el quote cambia, significa que la caja que lo contiene tambien cambio */


    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr />

            <blockquote className="blockquote text-right">
                <p 
                    className="mb-0"
                    // Esta es la referencia de los tamaños
                    ref={ pTag } 
                > 
                    {/* Esta es la frase */}
                    { quote } 
                </p>
            </blockquote>


            {/* Una etiqueta pre, que cada cosa la pone en renglones diferentes */}
            {/* el JSON.stringify porque se quiere renderizar el objeto, sin ningun replacer y un 3, es para que cada cosa en un renglon */}
            <pre>
                { JSON.stringify( boxSize, null, 3 ) }
            </pre>


            <button //** Neta no mames, ve lo facil es crear un boton para seguir programando... bootrstrap es maquetacion rapida, esta estalecido que el onClick haga el increment y todo arreglado */
                className="btn btn-primary"
                onClick={ increment }
            >
                Siguiente quote
            </button>

        </div>
    )
}
