import React from 'react'
import { useState, useEffect } from 'react'; //** Hooks */

//** rafc */
export const CounterEffect = () => { 

  const [counter, setCounter] = useState(5) //** 1=Estado Actual, 2=Modificacion estado, 3=Valor inicial del Hook */

  const handleClick = () => { //** Funciones del Boton */
    setCounter( valIni => valIni + 1) //** Valores que recibe el sC, dentro instrucciones de la funcion */
  }

  // useEffect(() => { //** uE dispara una funcion, siempre minimo 1 vez se dispara */
  //   first
  //   return () => { //** Funcion que se ejecuta cuando el componente va a ser destruido, conocido como funcion de limpieza */
  //     second
  //   }
  // }, [third]) //** Ultimo=Arreglo de dependencias, se ejecuta cuando cambie */

  useEffect(() => {
    if ( counter <= 10 ) {
    console.log('useEffect'); //** Se disparo el useEffect, osea es como un DoWhile */
}}, [counter]) //** Cada vez que el counter cambia que se dispare */

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