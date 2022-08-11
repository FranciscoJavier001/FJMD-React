import React from 'react'
import Box from '@mui/system/';

export const JournalLayout = ({ children }) => { //** Recibo el children */
  return (
    <Box sx={{ display: 'flex' }}> {/* Box=Caja, display:flex=Los elementos van a ir en fila */}

      {/* Navbar */}

      {/* Sidebar */}

      <Box
        component='main'
        sx={{ flexGrow: 1, p: 3 }} //** flexGrow=Todos tienen la misma anchura */
        >
          {/* Toolbar */}

          {children} {/* Renderizo el children */}

      </Box>

    </Box>
  )
}