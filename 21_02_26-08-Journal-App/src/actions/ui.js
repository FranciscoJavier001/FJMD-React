//** Acciones en el UI */

import { types } from "../types/types";

export const setError = ( err ) => ({ //** De una vez voy a hacer el return del objeto y va a recibir el payload del error */
    type: types.uiSetError,
    payload: err
})

export const removeError = () => ({ //** De una vez voy a hacer el return del objeto y no va a recibir ningun objeto */
    type: types.uiRemoveError, //** Va a llamar a la funcion de remover error */
})

export const startLoading = () => ({ //** Asi llamamos las acciones, y ahora se debe hacer el dispatch de estas acciones */
    type: types.uiStartLoading,
})

export const finishLoading = () => ({
    type: types.uiFinishLoading,
})