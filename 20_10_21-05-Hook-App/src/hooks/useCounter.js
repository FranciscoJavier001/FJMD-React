// rafc nos crea un functional component
import { useState } from 'react';

export const useCounter = ( initialState = 10 ) => {
    
    const [state, setState] = useState(initialState); // 10 //** Pon atencion en el CounterWithCustomHook, con el state, recuerda el nombre que tiene para poderlo usar desde aqui que aqui importamos las funciones */

    const reset = () => { //** Funcion de flecha que no hace nada, solo llama al setCounter */
        setState( initialState ); //** Aqui mandamos el valor del initialState que es de 10 */
    }

    const increment = () => {
        setState( state + 1 );
    }

    const decrement = () => {
        setState( state - 1 );
    }

    return {
        state, //** Esta definido en CounterWithCustomHook y aqui */
        increment,
        decrement,
        reset
    };

}
