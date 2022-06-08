//**________________________________________________________________________________________________________________________________________________________________*/
import React, { useState } from 'react'

export const Counter = () => { //** FC que se llama asi y se llama en el App.tsx */

  const [counter, setCounter] = useState(0) //** Primero es un estado actual, el segundo es la funcion que cambia el estado y lo ultimo valor inicial */

  const incrementar = ( numero: number = 1 ):void => { //** Funcion, que numero es un number con un valor de 1 y esta va */
    setCounter(counter + numero) //** Como lo vemos, es la funcion que va a hacer algo, y aqui va a sumar 1 */
  }

  return (
    <div className='mt-5'> {/* Le metimos clases a este div */}
        <h3>Counter: useState</h3>
        <span>Valor: { counter }</span>
        <br />
        <button
        onClick={ () => incrementar() } //** En TS como me pide definir las variables, si lo dejaba son la funcion anonima de flecha, no iba a ejecutar nada */
        className='btn btn-outline-primary mt-2'> {/* Cuando se toque este boton, va a volver a aumentar en 1 */}
          +1
        </button>
        <button
        onClick={ () => incrementar(2) } //** En TS como me pide definir las variables, si lo dejaba son la funcion anonima de flecha, no iba a ejecutar nada */
        className='btn btn-outline-primary mt-2'> {/* Cuando se toque este boton, va a volver a aumentar en 1 */}
          +2
        </button>
        <button
        onClick={ () => setCounter(0) } //** En TS como me pide definir las variables, si lo dejaba son la funcion anonima de flecha, no iba a ejecutar nada */
        className='btn btn-outline-danger mt-2'> {/* Cuando se toque este boton, va a volver a aumentar en 1 */}
          Reset
        </button>
    </div>
  )
}