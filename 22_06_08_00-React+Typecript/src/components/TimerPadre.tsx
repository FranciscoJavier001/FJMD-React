//** Este es el componente que voy a renderizar */
import { Timer } from './Timer'; //** Importo el Timer */
import { useState } from 'react';

export const TimerPadre = () => {

    const [millisegundos, setMillisegundos] = useState(1000); //** Su estado, su estado actualizado, y como inicia */

  return (
    <>
     <h3>Timer</h3>
     
    <span>Milisegundos { millisegundos }</span> {/* Mostramos en el DOM, luego ponemos el estado actual del componente */}
    <br /> {/* Linea de codigo */}

    <button className='btn btn-outline-success' //** Boton con clases */
        onClick={ () => setMillisegundos(1000) }> {/* Al ejecutar esto, se va a poner en 1 segundo del sM */}
        1000
    </button>
    
    <button className='btn btn-outline-success'
        onClick={ () => setMillisegundos(2000) }> {/* Aqui cambia a 2 segundos por 1 */}
        2000
    </button>

    <Timer milisegundos={ millisegundos } /> {/* Lo importe, para asignarle aqui el valor a los milisegundos, se los asigno al timer L7 con export */}
    </>
  )
}

