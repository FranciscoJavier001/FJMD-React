import { useReducer } from 'react'; //** Hook de React uS */

interface CounterState { //** Defino la interface del estado inicial, osea le defino las variables */
  counter : number;
  previous : number;
  changes : number;
}

const INITIAL_STATE : CounterState = { //** I_S va a ser del tipo CS - (Tecnica que se usa para mantener estado inicial) */
  counter : 0, //** Aqui se maneja el valor actual */
  previous : 0, //** Siempre va a tener el valor anterior */
  changes: 0 //** Cuantos cambios se han realizado, solo aumenta en 1 */
}

//** Type-Similar Interface */
type CounterAction = //** Voy a definir los tipos de acciones, y el payload va a ser del tipo de valor de la accion */
  | { type: 'increaseBy', payload: { value: number } }
  | { type: 'decreaseBy', payload: { value: number } } 
  | { type: 'reset' }

//** Reducer(Funcion que produce un nuevo estado), Defino el state que va a ser del tipo CS, y las acciones del tipo CA */
const counterReducer = ( state:CounterState, action:CounterAction ): CounterState => { //** Ultimo=Valor de retorno */

  const { counter, changes } = state //** Voy a hacer una desestructuracion del state */

  switch ( action.type ) { //** Reducer se pueden trabajar con un Switch, y voy a poner los tipos de acciones */
    case 'increaseBy': //** Los casos definidos en los type */
      return { //** Retorno un objeto del tipo CS, con sus variables */
        changes: changes + 1, //** Incremento el contador de cambios */
        counter: counter + action.payload.value, //** Incremento el contador */
        previous: counter //** Guardo el valor anterior */
      }
      
      case 'decreaseBy':
        return {
          changes: state.changes + 1,
          counter: state.counter + action.payload.value,
          previous: state.counter
        }

        case 'reset':
        return {
          counter: 0, //** El contador se va a poner el 0 y todo lo del CS igual */
          changes: 0,
          previous: 0
        }
  
    default:
      return state; //** Si recibo una accion que no este definida, regreso el state como estaba anteriormente */
  }
}

//** rafc */
export const CounterReducerComponent = () => { 

  //** 1.Estado al iniciar el hook, 2.La accion que dispara */
  //** 3.Recibe un par de argumentos y regresa un nuevo estado del cR, 4.Estado actual del uR */
  const [ counterState , dispatch] = useReducer(counterReducer, INITIAL_STATE)

const handleReset = () => { //** Funciones del Boton, nombre diferente para diferenciar sus acciones */
    dispatch({ type: 'reset' }) //** Mando dispatch, con el tipo de accion y con lo que retorna */
}

const increaseBy = ( value:number ) => { //** En esta funcion el value es de tipo number */
  //** Mando dispatch, con el tipo de accion y con lo que retorna y el payload me pide un valor(a modificar) */
  dispatch({ type: 'increaseBy', payload: { value } })
}

const decreaseBy = ( value:number ) => {
  dispatch({ type: 'decreaseBy', payload: { value } })
}

  return ( //** Renderizamos en el DOM */
    <> {/* Fragment=No contiene nada dentro */}
    <h1>Counter Reducer</h1> {/* Solo texto del counter */}
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