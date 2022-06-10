//** Primero hice un rafc de este componente para poderlo montar */
import { useReducer } from "react";

const initialState = { //** Creo el estado inicial (esto es un reducer) no se va a modificar, se crea otro state */
    contador: 0
}

type ActionType = //** Acciones que este reducer va a recibir */
    | { type: 'incrementar' } //** Asi defino, con todo y tipo, lo primero dice "O" */
    | { type: 'decrementar' }
    //** Payload es el argumento que le voy a mandar, en este caso un numero, argumento que viene en la accion, pero puede recibir lo que sea
    | { type: 'custom', payload: number }

//** Reducer, que su estado es number(como el iS) y la accion es el nuevo state, que su accion va a ser del AT que solo es incrementar */
const contadorReducer = ( state: typeof initialState, action: ActionType ) => {

    switch (action.type) { //** Switch para saber que accion se va a realizar */
        case 'incrementar': //** Si la accion es incrementar */
            return { //** Retorno el nuevo state */
                ...state, //** Retorno el estado actual(nuevo) del state */
                contador: state.contador + 1 //** Incremento el contador */
            }

        case 'decrementar':
            return {
                ...state,
                contador: state.contador - 1
            }

        case 'custom':
            return {
                ...state,
                contador: action.payload //** Se recibe una accion de L8, y recibe un numero */
            }

        default:
            return state; //** Retorno el estado actual, en caso que no se haga nada */
    }
}

export const ContadorRed = () => {

    //** Lo primero es el state(como se encuentra al inicio), lo segundo dispara acciones del AT */
    //** Despues viene el reducer(funcion que retorna un nuevo estado-en este caso contadorReducer), el segundo es el definido arriba L4 */
    const [contadorState, dispatch] = useReducer(contadorReducer, initialState)
    // const [{ contador }, dispatch] = useReducer(contadorReducer, initialState) //** Con lo primero desestructuro la propiedad del estate L51 */

  return (
    <> {/* Los fragments es porque no quiero que tengan nada adentro */}
     <h2>ContadorRed: { contadorState.contador}</h2> {/* Lo que viene despues de los : lo voy a cambiar por el cS en el estado contador */}
     {/* <h2>ContadorRed: { contador}</h2> */} {/* Lo que viene despues de los : lo voy a cambiar por el cS en el estado contador L46-*/}
        <button className="btn btn-outline-primary" //** Le doy estilos al boton */
        onClick={ () => dispatch({ type: 'incrementar' }) }> {/* Al hacer click llamo una funcion se dispara la funcion de AT incrementar */}
            +1</button> {/* Nombre del boton */}
        
        <button className="btn btn-outline-success"
        onClick={ () => dispatch({ type: 'decrementar' }) }>
            -1</button>

        <button className="btn btn-outline-danger"
        onClick={ () => dispatch({ type: 'custom', payload: 100 }) }> {/* Ahora se dispara el payload de L33 y aqui definimos el valor */}
            +100</button>
    </>
  )
}
