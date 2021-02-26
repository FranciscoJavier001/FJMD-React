import React from 'react'
import { AppRouter } from './components/routers/AppRouter'

export const JournalApp = () => {
    return (
        //** Voy a poner aqui el componente, para no utilizar desde el mas alto nivel, sino desde este que esta inferior al index */
        <AppRouter />
    )
}