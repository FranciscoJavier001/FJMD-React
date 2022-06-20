//** Lo inicializamos con rafc */
import React from 'react'
import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap'; //** Importamos este paquete para animaciones */

const MAXIMIN_COUNT = 10 //** Lo voy a recibir como argumento despues */

export const useCounter = () => {

    const [counter, setCounter] = useState(5) //** 1=Estado Actual, 2=Modificacion estado, 3=Valor inicial del Hook */
    //** Este va a ser el objeto de referenca, con HHE seleccion elemento del DOM e inicializo null */
    const counterElement = useRef<HTMLHeadingElement>(null)
    
    const handleClick = () => { //** Funciones del Boton */
      //** Valores que recibe el sC, dentro definimos la funcion del valor inicial aumente en 1 y que no pase del M_C */
      setCounter( valIni => Math.min( valIni + 1, MAXIMIN_COUNT ) ) //** Asi ya no puede subir mas */
    }
  
    useEffect(() => { //** Que se haga este efecto cuando llegue a 10 */
      if ( counter < 10 ) return //** Cuando el contador llegue a 10 se manda el mensaje en consola */
      console.log('%cEl contador es mayor de 10', 'color: red; background-color: black'); //** Estilos para consola */
  
      const tl = gsap.timeline() //** Voy a crear un timelime */
      
      //** Recuerda.. tenemos el to y el from */
      tl.to( counterElement.current, { y: -10, duration: 0.2, ease: 'ease.out' } ) //** Efecto de entrada */
        .to( counterElement.current, { y: 0, duration: 1, ease: 'bounce.out' } ) //** Efecto de salida */
  
  }, [counter]) //** Cada vez que el counter cambia que se dispare */
  
    return { //** Lo pongo asi porque quiero retornar un objeto */
        counter, //** Tenia errores en el  */
        counterElement, 
        // elementToAnimate: counterElement, //** Le cambio el nombre, pero con los : es donde va a apuntar */
        handleClick
  }
}
