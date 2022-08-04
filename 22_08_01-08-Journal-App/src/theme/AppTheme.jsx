//** HOC, componente que recibe otros componentes hijos */
import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'

import { purpleTheme } from './purpleTheme'

export const AppTheme = ({ children }) => { //** Es HOC porque recibe el children */
  return (
    <ThemeProvider theme={ purpleTheme }> {/* Le asigno cual va a ser el tema y lo importo */}
        <CssBaseline />
        { children } {/* Este va a ser el App */}
    </ThemeProvider>
  )
}