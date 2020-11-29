import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';

import '../02-useEffect/effects.css';

export const Memorize = () => {

    const { counter, increment } =  useCounter( 10 ); //** useCounter, el valor inicial va a ser de 10 y lo agarramos desde el Hook useCounter */
    const [ show, setShow ] = useState(true);

    return (
        <div>
            {/* Voy a poner el counter con su valor, importa el componente desde Small, que dentro tiene el valor de value tiene el valor del counter */}
            <h1>Counter: <Small value={ counter } /></h1>
            <hr />


            <button //** Para incrementar */
                className="btn btn-primary"
                onClick={ increment }
            >
                +1
            </button>

            <button //** Cambiame el valor a lo contrario que tenga actualmente, por eso el set, porque va a cambiarlo al hacer click */
                className="btn btn-outline-primary ml-3" //** La sentencia outline, dice que solo se coloree cuando tengo el cursor dentro */
                onClick={ () => {
                    setShow( !show ); //** Vamos a llamar una funcion, que va a poner lo opuesto de show */
                }}
            >
                {/* Lo llamo con el JSON.stringify en el boton, para que veamos el estado del show */}
                Show/Hide: { JSON.stringify( show ) }
            </button>

        </div>
    )
}
