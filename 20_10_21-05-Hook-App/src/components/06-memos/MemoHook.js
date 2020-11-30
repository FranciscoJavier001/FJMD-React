import React, { useState, useMemo } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { procesoPesado } from '../../helpers/procesoPesado';

import '../02-useEffect/effects.css';

export const MemoHook = () => {

    const { counter, increment } =  useCounter( 500 ); //** Utilizamos el useCounter */
    const [ show, setShow ] = useState(true); //** Lo definimos como el estado inicial, que va a cambiar cuando le demos */
    
    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [ counter ]); //** Mandamos en counter como argumento (actualmente tiene un valor de 500), y le decimos, memoriza este valor si los argumentos son iguales, pero si cambian hay que reprocesarlos y si no cambian pues memorizate el resultado, si el counter cambia necesito una version memorizada del resultado de esta funcion y la funcion va a ser el proceso pedaso mandando el counter, me va a retornar el memoProcesoPesado */

    return (
        <div>
            {/* Es lo que sale en el DOM */}
            <h1>MemoHook</h1>
            <h3>Counter: <small>{ counter }</small></h3>
            <hr />

            {/* Este es lo que sale en el DOM escrito en un parrado lo declaramos arriba y esta desestructurado */}
            <p>{memoProcesoPesado}</p>

            {/* Es un boton con clases de bootstrap */}
            <button 
                className="btn btn-primary"
                onClick={increment}
            >
                +1
            </button>

            {/* Otro boton con la logica para que cuando demos un click cambie el estado de show a lo contrario */}
            <button
                className="btn btn-outline-primary ml-3"
                onClick={ () => {
                    setShow( !show );
                }}
            >
                {/* Esto es lo que tenemos escrito en el boton */}
                Show/Hide: { JSON.stringify( show ) }
            </button>
        </div>
    )
}
