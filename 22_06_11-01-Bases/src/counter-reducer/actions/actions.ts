//** Type-Similar Interface */
//** Exporta para poderlo usar fuera de este archivo */
export type CounterAction = //** Voy a definir los tipos de acciones, y el payload va a ser del tipo de valor de la accion */
| { type: 'increaseBy', payload: { value: number } }
| { type: 'decreaseBy', payload: { value: number } } 
| { type: 'reset' }