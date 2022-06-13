import React from 'react'
import { useState } from 'react'; //** Hook del uS */

interface CounterProps { //** Definicion y tipado de las variables del CP */
  initialValue ? : number; //** iV es opcional que tenga un valor numerico */
}

//** rafc, Desestructuramos el iV y le asignamos un valor numerico, definido en las CP */
export const Counter = ( {initialValue = 0 }: CounterProps ) => { 

const [counter, setCounter] = useState(initialValue) //** 1=Estado Actual, 2=Modificacion estado, 3=Valor inicial del Hook */

const handleClick = () => { //** Funciones del Boton */
    setCounter( valIni => valIni + 1) //** Valores que recibe el sC, dentro instrucciones de la funcion */
    // console.log('click'); //** Mostrar en consola al hacer click */
}

  return ( //** Renderizamos en el DOM */
    <> {/* Fragment=No contiene nada dentro */}
    <h1>Counter: { counter }</h1> {/* Muestro el estado del Counter */}

    <button //** Boton */
    onClick={ () => handleClick() }> {/* Al hacer click mando llamar la funcion */}
        +1
    </button>
    </>
  )
}