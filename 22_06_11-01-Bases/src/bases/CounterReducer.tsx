import { useReducer } from 'react'; //** Hook de React uS */

interface CounterState { //** Defino la interface del estado inicial, osea le defino las variables */
  counter : number;
  previous : number;
  changes : number;
}

const INITIAL_STATE : CounterState = { //** I_S va a ser del tipo CS - (Tecnica que se usa para mantener estado inicial) */
  counter : 10, //** Aqui se maneja el valor actual */
  previous : 15, //** Siempre va a tener el valor anterior */
  changes: 20 //** Cuantos cambios se han realizado, solo aumenta en 1 */
}

//** En el type puedo definir las actions */
//** Quiero que asi luzca, el tipo va a ser de incremento, y el payload va a ser un valor de tipo number(desestructurado) */

//** Type-Similar Interface */
type CounterAction = //** Voy a definir los tipos de acciones, y el payload va a ser del tipo de valor de la accion */
  | { type: 'increaseBy', payload: { value: number } }
  | { type: 'decreaseBy', payload: { value: number } } 
  | { type: 'reset' }

//** Me voy a crear el reducer, que es una funcion que produce un nuevo estado */
//** Se recibe un state, que va a ser del tipo CS y la action las voy a definir en el CA */
//** Despues de parentesis es el valor de retorno de una funcion */
//** action: va a ser del tipo CA */

//** Reducer(Funcion que produce un nuevo estado), Defino el state que va a ser del tipo CS, y las acciones del tipo CA */
const counterReducer = ( state:CounterState, action:CounterAction ): CounterState => { //** Ultimo=Valor de retorno */
  switch (action.type) { //** Reducer se pueden trabajar con un Switch, y voy a poner los tipos de acciones */
    case 'reset': //** Los casos definidos en los type */
    return { //** Retorno un objeto del tipo CS, con sus variables */
      counter: 0, //** El contador se va a poner el 0 y todo lo del CS */
      changes: 0,
      previous: 0
    }
  
    default:
      return state; //** Si recibo una accion que no este definida, regreso el state como estaba anteriormente */
  }
}

//** rafc */
export const CounterReducerComponent = () => { 

  //** Desestructuro el state y mando el counter, porque se que viene desde cS */
  //** 1.Estado al iniciar el hook, 2.La accion que dispara */
  //** 3.Recibe un par de argumentos y regresa un estado del cR 4.Estado actual del uR */
  const [{ counter }, dispatch] = useReducer(counterReducer, INITIAL_STATE)

const handleClick = () => { //** Funciones del Boton */
    dispatch({ type: 'reset' }) //** Mando dispatch, con el tipo de accion y con lo que retorna */
}

  return ( //** Renderizamos en el DOM */
    <> {/* Fragment=No contiene nada dentro */}
    <h1>Counter Reducer: { counter }</h1> {/* Muestro el estado del Counter(texto y numeros actuales) */}

    <button //** Boton */
    onClick={ () => handleClick() }> {/* Al hacer click mando llamar la funcion */}
        Reset
    </button>
    </>
  )
}