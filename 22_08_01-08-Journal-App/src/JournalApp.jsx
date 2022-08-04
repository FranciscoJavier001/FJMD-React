//** FC */
import React from 'react'
import { AppRouter } from './router/AppRouter'
import { AppTheme } from './theme'

export const JournalApp = () => {
  return (
    <AppTheme> {/* Envuelvo la aplicacion dentro de este tema */}
        <AppRouter /> {/* La que vamos a renderizar, esta solo manda login o register */}
    </AppTheme>
  )
}