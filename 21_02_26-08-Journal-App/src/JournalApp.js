//** Asi tenemos configurado el rediux en nuestra aplicacion */

import React from 'react'
import { Provider } from 'react-redux' //** El Provider hace lo mismo que el context que proveia informacion a toda la aplicacion */

import { AppRouter } from './routers/AppRouter'
import { store } from './store/store'

export const JournalApp = () => {
    return (
        //** Voy a poner aqui el componente, para no utilizar desde el mas alto nivel, sino desde este que esta inferior al index */
        <Provider store={ store }> {/* Este Provider va a ser un HighOrderControles que va a tener la informacion que en este caso sera el store  */}
            <AppRouter />
        </Provider>
    )
}