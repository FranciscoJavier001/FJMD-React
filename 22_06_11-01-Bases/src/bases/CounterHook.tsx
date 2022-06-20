import React from 'react'
import { useCounter } from '../hooks/useCounter'

//** rafc */
export const CounterHook = () => { //** Esto lo usamos para poder importarlo al app */

  //** Asi voy a usar el customHook y asi ya tengo acceso a los elementos que necesitaba, al igual que el useCounter */
  const { counter, counterElement, handleClick } = useCounter() 
  return ( //** Renderizamos en el DOM */
    <> {/* Fragment=No contiene nada dentro */}
      <h1>Counter Hook:</h1>
      <h2 ref={ counterElement }>{ counter }</h2> {/* Le voy a asignar una referencia que defini arriba */}

      <button //** Boton */
      onClick={ () => handleClick() }> {/* Al hacer click mando llamar la funcion */}
          +1
      </button>
    </>
  )
}