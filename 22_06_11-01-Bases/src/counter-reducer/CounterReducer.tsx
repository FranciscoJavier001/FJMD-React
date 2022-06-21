import { useReducer } from 'react'; //** Hook de React uS */
import { CounterState } from './interfaces/interfaces';
import { counterReducer } from './state/counterReducer';
import { doReset, doIncreaseBy, doDecreaseBy,  } from './actions/actions';

//** Si dejo seleccionado y selecciono cmd+. me da la opcion de importar prederterminada */
const INITIAL_STATE : CounterState = { //** I_S va a ser del tipo CS - (Tecnica que se usa para mantener estado inicial) */
  counter : 0, //** Aqui se maneja el valor actual */
  previous : 0, //** Siempre va a tener el valor anterior */
  changes: 0 //** Cuantos cambios se han realizado, solo aumenta en 1 */
}

//** rafc */
export const CounterReducerComponent = () => { 

  //** 1.Estado al iniciar el hook, 2.La accion que dispara */
  //** 3.Recibe un par de argumentos y regresa un nuevo estado del cR, 4.Estado actual del uR */
  const [ counterState , dispatch] = useReducer(counterReducer, INITIAL_STATE)

const handleReset = () => { //** Funciones del Boton, nombre diferente para diferenciar sus acciones */
    dispatch( doReset() ) //** Se hizo un refactoring y ahora el dispatch llama el doReset(recuerda importarlo) */
}

const increaseBy = ( value:number ) => { //** En esta funcion el value es de tipo number */
  dispatch( doIncreaseBy(value) ) //** Refactoring en counter-reducer/actions/actions.ts */
}

const decreaseBy = ( value:number ) => {
  dispatch( doDecreaseBy(value) ) //** Para importar recuerda seleccionar el elemento y luego con cmd+. en importar */
}

  return ( //** Renderizamos en el DOM */
    <> {/* Fragment=No contiene nada dentro */}
    <h1>Counter Reducer Segmentado</h1> {/* Solo texto del counter */}
    <pre> {/* La etiqueta pre es para mandar algo como si fuera codigo */}
      { JSON.stringify(counterState, null, 2) } {/* Muestro como un String el JSON del cS(estado inicial), null en el replacer e identacion de 2 */}
    </pre>

    <button //** Boton */
    onClick={ () => increaseBy(1) }> {/* Al hacer click mando llamar la funcion */}
        +1
    </button>

    <button 
    onClick={ () => increaseBy(5) }>
        +5
    </button>

    <button
    onClick={ () => increaseBy(10) }>
        +10
    </button>

    <button
    onClick={ () => decreaseBy(-1) }>
        -1
    </button>

    <button
    onClick={ () => handleReset() }>
        Reset
    </button>
    </>
  )
}