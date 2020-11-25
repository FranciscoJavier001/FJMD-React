//** La falla en este archivo es que lo usamos en MultipleCustomHooks y cambiamos los nombres, cambiamos de state por counter y el setState por setCounter */

// rafc nos crea un functional component
import { useState } from 'react';

export const useCounter = ( initialState = 10 ) => {
    
    const [counter, setCounter] = useState(initialState); // 10 //** Pon atencion en el CounterWithCustomHook, con el state, recuerda el nombre que tiene para poderlo usar desde aqui que aqui importamos las funciones */

    const reset = () => { //** Funcion de flecha que no hace nada, solo llama al setCounter */
        setCounter( initialState ); //** Aqui mandamos el valor del initialState que es de 10 */
    }

    const increment = () => {
        setCounter( counter + 1 );
    }

    const decrement = () => {
        setCounter( counter - 1 );
    }

    return { //** Mandamos la referencia a las funciones */
        counter, //** Esta definido en CounterWithCustomHook y aqui */
        increment,
        decrement,
        reset
    };

}


