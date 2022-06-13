import React from 'react'
import { useState } from 'react'; //** Hook que vamos a usar */

interface CounterProps { //** Propiedades que le vamos a pasar al CP, le definimos los tipos de variables */
    initialValue ? : number; //** iV es opcional que sea un numero, asi no tengo falla en el App */
}

interface CounterState {
  counter: number
  clicks: number
}

  //** Viene de rafc, el iV lo inicializo en 0 por ser number y le pasamos sus variables desde el CP */
  export const CounterBy = ( {initialValue = 0 }: CounterProps ) => {

    //** Desestructuramos lo que viene del estado CS, luego ponemos el sCS, es = al uS que tiene esas variables */
    const [ { counter, clicks }, setCounterState ] = useState<CounterState>({
      counter: initialValue, //** Asi les ponemos valores iniciales */
      clicks: 0,
    })

  const handleClick = ( value: number) => { //** Funcion de apretar un boton que recibe un valor numerico */
      setCounterState( () => ({ //** Le vamos a dar instrucciones al sCS, instrucciones a ejecutar */
        counter: counter + value, //** El estado, se modifica con el contador, mas el valor asignado en la funcion */
        clicks: clicks + 1, //** Este solo aumenta 1 al dar click */
      }))
    }

  return ( //** Lo que renderiza el DOM */
    <> {/* Fragment=Porque no quiero tener nada adentro */}
    <h1>Counter: { counter }</h1> {/* Muestro el Contador */}
    <h1>Clicks: { clicks }</h1> {/* Muestro los clicks */}

    <button //** Boton */
    onClick={ () => handleClick(1) }> {/* Que el contador suba lo que le asigno en los parentesis */}
        +1
    </button>

    <button
    onClick={ () => handleClick(5) }>
        +5
    </button>
    </>
  )
}