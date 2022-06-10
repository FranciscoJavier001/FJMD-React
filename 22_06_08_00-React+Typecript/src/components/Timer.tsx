import { useEffect, useRef, useState } from 'react'; //** Son los hooks que vamos a utilizar */

type TimeArgs = { //** Aqui definimos el tipo que solo voy a trabajar en este archivo */
    milisegundos: number; //** Aqui definimos el tipo que son los milisegundos */
}

//** exportamos el timer, hago desestructuracion de milisegundos que recibe la propiedad desde el TimerPadre y su tipo es de TimerArgs */
export const Timer = ( { milisegundos }: TimeArgs ) => { 

    const [segundos, setSegundos] = useState(0); //** Para mantener el estado, funcion que lo cambia, y estado inicial */
    // console.log(milisegundos); //** Para ver en consola como suben los milisegundos o donde le pido 1000/2000 */
    
    //** Asi voy a mantener la referencia al componente que no importa las veces que se reconstruya, siempre va a ser lo mismo en memoria y tipo a mantener */
    const ref = useRef<NodeJS.Timeout>();

    useEffect( () => { //** Funcion que tiene internamente un callback que tiene dependencias */
        //** Si el ref.current existe entonces limpialo el ref.current */
        ref.current && clearInterval( ref.current ); //** Limpio la referencia de los milisegundos voy a limpiar el intervalo */
        // console.log(useEffect); //** Nos muestra las veces que es disparado */
        //** sI=Func de JS, recibe otra func, dentro tengo el estado actual, segundo es lo que hace, y lo tercero es cuando se ejecuta */
        ref.current =  setInterval( () => setSegundos( seg => seg + 1 ), milisegundos );
    }, [milisegundos]) //** Dependencia que esta atento de cada cuando cambia y cuando cambia limpio el clearInterval */

  return (
    <>
        <h4>Timer: <small>{ segundos }</small></h4> {/* Mostramos en el DOM, los segundos son del useState, asi que van a ir cambiando */}
    </>
  )
}