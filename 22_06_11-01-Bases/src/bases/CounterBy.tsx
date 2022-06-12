import React from 'react'
import { useState } from 'react';

interface CounterProps { //** Propiedades que le vamos a pasar al Counter */
    initialValue?: number; //** Simpemente le asignamos el tipo number y por default es 0, con el ? le decimos que es opcional */
}

//** Lo hago con rafc -- Para pasarle un valor aqui voy a desestructurar esa variable y asigno valor numero */
export const CounterBy = ( {initialValue = 0 }: CounterProps ) => { 

  //** Primero el estado actual, segundo el que modifica el estado, tercero valor inicial */
  const [counterState, setCounterState] = useState({ //** Lo ultimo va a tener el valor del initialValue */
    counter: initialValue, //** Asi inicializamos el valor del contador, con el valor inicial del initialValue */
    clicks: 0, //** Asi voy a saber cuantas veces he aumentado ese contador */
  })

  //** Voy a desestructurar un objeto, para no tener error en el counter ni clicks */
  const { counter, clicks } = counterState;

  const handleClick = ( value: number) => { //** Funcion que se hace al apretar un boton, recibo un valor del tipo numero */
    setCounterState( valIni => ({ //** La accion que se hace al hacer click, voy a retornar directamete un objeto */
        //** Dentro del objeto va a venir un counter en el valor anterior valIni.counter y le sumo el value que recibo arriba */
        counter: valIni.counter + value,
        clicks: valIni.clicks + 1, //** Como es typeScript debo definir todas las variables y lo que hacens */
      })) 
      // console.log('click'); //** Muestro en Consola cuando haga click */
  }

  return ( //** Muestro en el DOM */
    <> {/* Es un div que esta vacio */}
    <h1>Counter: { counter }</h1> {/* Muestro en el DOM el contador */}
    <h1>Clicks: { clicks }</h1> {/* Tambien quiero mostrar los clicks */}

    <button //** Boton */
    onClick={ () => handleClick(1) }> {/* Cuando haga click */}
        +1
    </button>

    <button //** Boton */
    onClick={ () => handleClick(5) }> {/* Cuando haga click */}
        +5
    </button>
    </>
  )
}
