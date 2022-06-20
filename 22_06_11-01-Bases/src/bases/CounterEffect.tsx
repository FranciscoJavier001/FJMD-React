import React from 'react'
import { useState, useEffect, useRef } from 'react'; //** Hooks */
import { gsap } from 'gsap'; //** Importamos este paquete para animaciones */

const MAXIMIN_COUNT = 10 //** Asignamos un valor maximo numerico para una validacion */

//** rafc */
export const CounterEffect = () => { 

  const [counter, setCounter] = useState(5) //** 1=Estado Actual, 2=Modificacion estado, 3=Valor inicial del Hook */
  //** Este va a ser el objeto de referenca, con HHE seleccion elemento del DOM e inicializo null */
  const counterElement = useRef<HTMLHeadingElement>(null)
  
  const handleClick = () => { //** Funciones del Boton */
    //** Valores que recibe el sC, dentro definimos la funcion del valor inicial aumente en 1 y que no pase del M_C */
    setCounter( valIni => Math.min( valIni + 1, MAXIMIN_COUNT ) ) //** Asi ya no puede subir mas */
  }

  useEffect(() => {
    if ( counter < 10 ) return //** Cuando el contador llegue a 10 se manda el mensaje en consola */
    console.log('%cEl contador es mayor de 10', 'color: red; background-color: black'); //** Estilos para consola */

    //** to=De la posicion que se encuentra actualmente hasta */
    //** 1=Selector, 2=Objeto en la cual voy a configurarlo */
    //** Voy a apuntarle al h1, que en eje y baje +10, que suba -, duracion, ease=Como quiero empiece, cE.c, me deja seleccionar el objeto actual */
    gsap.to( counterElement.current, { y: -10, duration: 0-2, ease: 'ease.out' }).then( () => { 
      //** Con then le decimos como queremos que continue, osea llegando a 10 lo que va a seguir osea bajarlo */
      gsap.to( counterElement.current, { y: 0, duration: 1, ease: 'bounce.out' })
    })
    //** Que ahora llegue a 0 y que rebote a la salida */

}, [counter]) //** Cada vez que el counter cambia que se dispare */

  return ( //** Renderizamos en el DOM */
    <> {/* Fragment=No contiene nada dentro */}
    <h1>CounterEffect:</h1>
    <h2 ref={ counterElement }>{ counter }</h2> {/* Le voy a asignar una referencia que defini arriba */}

    <button //** Boton */
    onClick={ () => handleClick() }> {/* Al hacer click mando llamar la funcion */}
        +1
    </button>
    </>
  )
}