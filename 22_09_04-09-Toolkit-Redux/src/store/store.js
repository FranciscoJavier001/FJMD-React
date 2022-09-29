//** De la documentacion, dice qe hay que crear un Store de Redux vacio */
import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slices/counter'; //** Lo importo desde el index del counter */

export const store = configureStore({
  reducer: { 
    counter: counterSlice.reducer, //** Como quiero identificar el store, hay que apuntar al reducer */
  },
})