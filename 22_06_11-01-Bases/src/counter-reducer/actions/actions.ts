//** Type-Similar Interface */
//** Exporta para poderlo usar fuera de este archivo */
export type CounterAction = //** Voy a definir los tipos de acciones, y el payload va a ser del tipo de valor de la accion */
| { type: 'increaseBy', payload: { value: number } }
| { type: 'decreaseBy', payload: { value: number } } 
| { type: 'reset' }

//** Esto es un Action Creator */
export const doReset = ():CounterAction => ({ 
    type: 'reset' //** Me esta regresando este objeto */
})

export const doIncreaseBy = (value: number):CounterAction => ({ //** En estos casos no olvidar el payload */
    type: 'increaseBy',
    payload: { value } //** Lo mando porque estoy reibiendo un value */
})

export const doDecreaseBy = (value: number):CounterAction => ({
    type: 'decreaseBy',
    payload: { value }
})