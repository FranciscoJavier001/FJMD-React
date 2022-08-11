import React from 'react'
import { Box } from '@mui/system/';

const drawerWidth = 240;

export const JournalLayout = ({ children }) => { //** Recibo el children */
  return (
    <Box sx={{ display: 'flex' }}> {/* Box=Caja, display:flex=Los elementos van a ir en fila */}

      {/* Navbar drawerWidth */}

      {/* Sidebar drawerWidth */}

      <Box
        component='main'
        sx={{ flexGrow: 1, p: 3 }} //** flexGrow=Todos tienen la misma anchura, p=padding anchura de 3 hacia afuera */
        >
          {/* Toolbar */}

          {children} {/* Renderizo el children */}

      </Box>

    </Box>
  )
}