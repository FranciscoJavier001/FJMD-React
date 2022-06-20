//** Lo inicializamos con rafc */
import { useState, useRef, useEffect, useLayoutEffect } from 'react'; //** Hooks que voy a utilizar */
import { gsap } from 'gsap'; //** Importamos este paquete para animaciones */

//** Me creo una interface para los hooks */

//** Voy a desestructurar un objeto que voy a mandar, aqui le asigno un valor, pero va a respetar el del cH */
export const useCounter = ({ maxCount = 0 }) => { //** Para poder utilizar esta dependencia necesito un numero */

    const [counter, setCounter] = useState(5) //** 1=Estado Actual, 2=Modificacion estado, 3=Valor inicial del Hook */
    //** eTA va a tener una referencia any(cualquier elemento de HTML) y recibe un valor, pero lo puedo dejar vacio o en null */
    const elementToAnimate = useRef<any>() 

    const tl = useRef( gsap.timeline() ) //** Voy a crearme otro uR con la referencia al gsap con un linea de tiempo */
    
    const handleClick = () => { //** Funciones del Boton */
      //** sC tiene n valor inicial, que es el minimo y al precionar el boton aumenta en 1 y el valor maximo es el mC, si pasa bloqueo */
      setCounter( prev => Math.min( prev + 1, maxCount ) ) //** Que no pueda subir mas del mC */
    }

    //** Se asegura que ya tengamos contruidos nuestros elementos html y las dimenciones establecidas */
    useLayoutEffect(() => {

        if( !elementToAnimate.current ) return; //** Hago una evaluacion en caso que no tenga un valor y lo que retorna */
        
        //** Recuerda.. tenemos el to y el from, pause para que no se inicie */
        tl.current.to( elementToAnimate.current, { y: -10, duration: 0.2, ease: 'ease.out' } ) //** Efecto de entrada current estado actual */
                  .to( elementToAnimate.current, { y: 0, duration: 1, ease: 'bounce.out' } ) //** Efecto de salida */
                  .pause() //** No quiero que se empiece a hacer la animacion */
    }, []) //** Dejo dependencia vacia para que solo se construya 1 vez */
  
    useEffect(() => { //** Accion que se va a disparar */
        tl.current.play(1.5) //** Cada vez que se dispare, quiero que inicie la animacion en la posicion inicial */
    }, [counter]) //** Cada vez que el counter cambia que se dispare este evento de animacion */
  
    return { //** Lo pongo asi porque quiero retornar un objeto */
        counter, //** Son elementos que se van a utilizar y necesito exportatrlos CH */
        elementToAnimate,
        handleClick
  }
}