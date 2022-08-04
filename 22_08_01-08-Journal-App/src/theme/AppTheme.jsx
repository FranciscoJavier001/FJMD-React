//** HOC, componente que recibe otros componentes hijos */
import React from 'react'

export const AppTheme = ({ children }) => { //** Es HOC porque recibe el children */
  return (
    <ThemeProvider theme={ theme }>
        <CssBaseline />
        { children } {/* Este va a ser el App */}
    </ThemeProvider>
  )
}