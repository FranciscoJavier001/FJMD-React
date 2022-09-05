//** De la documentacion, dice qe hay que crear un Store de Redux vacio */
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {},
})