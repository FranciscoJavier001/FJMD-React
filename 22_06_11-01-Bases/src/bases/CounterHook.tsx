import { useCounter } from '../hooks/useCounter' //** Importamos este CH que creamos, para poder usar sus variables */

//** rafc */
export const CounterHook = () => { //** Esto lo usamos para poder exportarlo al app */

  //** Asi voy a usar el customHook y asi ya tengo acceso a los elementos que necesitaba, al igual que el useCounter */
  const { counter, elementToAnimate, handleClick } = useCounter({ maxCount: 15}) //** Defino valor maximo definitivo */

  return ( //** Renderizamos en el DOM */
    <> {/* Fragment=No contiene nada dentro */}
      <h1>Counter Hook:</h1> {/* Titulo */}
      <h2 ref={ elementToAnimate }>{ counter }</h2> {/* Le asigno una referencia, al elemento animado y muestro el contador */}

      <button //** Boton */
      onClick={ handleClick }> {/* Al hacer click mando llamar la funcion */}
          +1
      </button>
    </>
  )
}