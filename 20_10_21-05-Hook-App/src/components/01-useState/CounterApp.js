// rafc porque es un Functional Component

import React, { useState } from 'react';
import './counter.css';

export const CounterApp = () => {

    const [state, setState] = useState({ //** Creamos un State, donde le asignamos los valores */
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40,
    });

    const {counter1, counter2} = state; //** Aqui ya vienen desde el state, porque esta desestructurado (recuerda, podemos desestructurar cualquier objeto) y podemos acceder a sus propiedades */

    // console.log(counter)

    return (
        <>
         <h1>Counter1 { counter1 } </h1>
         <h1>Counter2 { counter2 } </h1>
         <hr />

         <button 
            className="btn btn-primary"
            onClick={ () => {
                setState({
                    ...state, //** Spred del estado actual */
                    counter1: counter1 + 1, 
                    // counter2: counter2 + 1, //** Para tomar los 2 */
                });
            }}
        >
             +1
         </button>
        </>
    )
}
