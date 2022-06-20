//** Reducer(Funcion que produce un nuevo estado), Defino el state que va a ser del tipo CS, y las acciones del tipo CA */
import { CounterAction } from "../actions/actions"
import { CounterState } from "../interfaces/interfaces"

//** Recuerda exportar */
export const counterReducer = (state: CounterState, action: CounterAction): CounterState => { //** Ultimo=Valor de retorno */

    const { counter, changes } = state //** Voy a hacer una desestructuracion del state */

    switch (action.type) { //** Reducer se pueden trabajar con un Switch, y voy a poner los tipos de acciones */
        case 'increaseBy': //** Los casos definidos en los type */
            return { //** Retorno un objeto del tipo CS, con sus variables */
                counter: counter + action.payload.value, //** Incremento el contador */
                previous: counter, //** Guardo el valor anterior */
                changes: changes + 1 //** Incremento el contador de cambios */
            }

        case 'decreaseBy':
            return {
                counter: state.counter + action.payload.value,
                previous: state.counter,
                changes: state.changes + 1
            }

        case 'reset':
            return {
                counter: 0, //** El contador se va a poner el 0 y todo lo del CS igual */
                previous: 0,
                changes: 0
            }

        default:
            return state; //** Si recibo una accion que no este definida, regreso el state como estaba anteriormente */
    }
}