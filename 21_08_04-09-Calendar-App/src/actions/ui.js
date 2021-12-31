//** Estos son los endpoints */
import { types } from "../types/types";

//** Este esta en types>types */
export const uiOpenModal = () => ({ type: types.uiOpenModal }); //** Solo va a regresar un objeto */
export const uiCloseModal = () => ({ type: types.uiCloseModal }); //** Solo va a regresar un objeto */