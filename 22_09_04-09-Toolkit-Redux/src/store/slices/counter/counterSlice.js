//** Slice es una funcion que recibe un objeto , ese objeto tiene L6-L10 name, initialState, reducers */
//** Documentacion Oficial https://redux-toolkit.js.org/api/createSlice */
import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({ //** Esto es un objeto */
  name: 'counter', //** Variables del objeto, solo su nombre */
  initialState: { //** Su estado inicial */
    counter: 10
  },
  reducers: {
    increment(state) { //** El state lo recibo como argumento, lo que va en parentesis */
      state.counter += 1 //** La funcion que hace */
    },
  },
})

//** Estas son conocidas como actionsCreator */
export const { increment } = counterSlice.actions //** Podemos ver las acciones en el objeto de createSlice L5, tomo accion increment */