import React from 'react'
import { useState } from 'react';

export const Counter = () => { //** Lo hago con rafc */

const [counter, setCounter] = useState(0) //** Primero el estado actual y el useState */

const handleClick = (numero: number = 1) => { //** Funcion que se hace al apretar un boton */
    setCounter(counter + numero) //** La accion que se hace al hacer click */
    // console.log('click'); //** Muestro en Consola cuando haga click */
}

  return ( //** Muestro en el DOM */
    <> {/* Es un div que esta vacio */}
    <h1>Counter: { counter }</h1> {/* Muestro en el DOM el contador */}

    <button //** Boton */
    onClick={ () => handleClick() }> {/* Cuando haga click */}
        +1
    </button>
    </>
  )
}
