import React from 'react'
import { useState } from 'react';

export const Counter = ( {initialValue = 0} ) => { //** Lo hago con rafc -- Para pasarle un valor aqui voy a desestructurar esa variable y asigno valor numero */

const [counter, setCounter] = useState(initialValue) //** Primero el estado actual, segundo el que modifica el estado, tercero valor inicial */

const handleClick = () => { //** Funcion que se hace al apretar un boton */
    setCounter( valIni => valIni + 1) //** La accion que se hace al hacer click */
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
