import React from 'react'
import { useState } from 'react';

interface CounterProps { //** Propiedades que le vamos a pasar al Counter */
    initialValue?: number; //** Simpemente le asignamos el tipo number y por default es 0, con el ? le decimos que es opcional */
}

//** Lo hago con rafc -- Para pasarle un valor aqui voy a desestructurar esa variable y asigno valor numero */
export const Counter = ( {initialValue = 0 }: CounterProps ) => { 

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
