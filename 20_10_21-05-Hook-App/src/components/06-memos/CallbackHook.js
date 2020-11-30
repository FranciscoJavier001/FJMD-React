import React, { useState, useCallback, useEffect } from 'react';
import { ShowIncrement } from './ShowIncrement';

import '../02-useEffect/effects.css';

export const CallbackHook = () => {

    const [counter, setCounter] = useState( 10 ); //** Bien, aqui el counter es uno qu no esta en los hooks y es el de ShowIncrement */

    // const increment = () => { //** Esto es un objeto y apunta a un lugar de memoria diferente , por consecuencia el React.memo no sirve, porque lo ve como una nueva funcion */
    //     setCounter( counter + 1 );
    // }

    const increment = useCallback( (num) => { //** useCallback funciona poniendo entre parentesis una nueva funcion en la cua se va a ejecutar lo que quiero ejecutar por ejemplo la logica de incrementar, me va a regresar una funcion memorizada de esa funcion que me va a servir para mandarla como argumento en otros lugares y React va a saber que la funcion no ha cambiado, el num (lo recibimos como argumento que sean emitidos en el onClick) */
        setCounter( c => c + num ); //** Aqui el "c" es el argumento, que va a ser igual a c + num, y el num es 10 que esta definido con el initialState que vale 10, pero esta definido en el setCounter */
    }, [ setCounter ] ); //** Entre corchetes esta la dependencia, para que React sepa que no ha cambiado, no se manda el counter como dependencia, porque si no otra vez se ejecutaria la funcion */
    
    useEffect( () => { //** El efecto tiene una dependencia y esta dependencia es la funcion, por eso es recomendable usar el useCallback porque de esta manera, esta funcion no esta cambiando, pero si no lo hicieramos con el useCallback esta funcion se dispararia cada vez que se renderize o se vuelva a construir esta funcion */
        // ???
    }, [increment] ) //** Entre corchetes esta la dependencia, para que sepa React que no ha cambiado y no se vuelva a renderizar o construir la funcion */


    return (
        <div>
            {/* Colocamos el valor del counter */}
            <h1>useCallback Hook:  {counter}</h1>
            <hr />

            {/* ShowIncrement nos retorna en el DOM un boton, por eso se muestra y se hace llamar la funcionq ue aumenta de 5, mando la funcion de increment como referencia */}
            {/* La variable se llama increment y la funcion de ShowIncrement tambien se llama increment, atencion en los colores, ya que la verde viene de ShowIncrment */}
            <ShowIncrement increment={increment}/>
        </div>
    )
}
