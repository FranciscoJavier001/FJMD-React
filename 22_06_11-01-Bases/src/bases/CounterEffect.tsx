import React from 'react'
import { useState, useEffect } from 'react'; //** Hooks */

const MAXIMIN_COUNT = 10 //** Asignamos un valor maximo numerico para una validacion */

//** rafc */
export const CounterEffect = () => { 

  const [counter, setCounter] = useState(5) //** 1=Estado Actual, 2=Modificacion estado, 3=Valor inicial del Hook */
  
  const handleClick = () => { //** Funciones del Boton */
    //** Valores que recibe el sC, dentro definimos la funcion del valor inicial aumente en 1 y que no pase del M_C */
    setCounter( valIni => Math.min( valIni + 1, MAXIMIN_COUNT ) ) //** Asi ya no puede subir mas */
  }

  useEffect(() => {
    if ( counter < 10 ) return //** Cuando el contador llegue a 10 se manda el mensaje en consola */
    console.log('%cEl contador es mayor de 10', 'color: red; background-color: black');
}, [counter]) //** Cada vez que el counter cambia que se dispare */

  return ( //** Renderizamos en el DOM */
    <> {/* Fragment=No contiene nada dentro */}
    <h1>CounterEffect: { counter }</h1> {/* Muestro el estado del Counter */}

    <button //** Boton */
    onClick={ () => handleClick() }> {/* Al hacer click mando llamar la funcion */}
        +1
    </button>
    </>
  )
}