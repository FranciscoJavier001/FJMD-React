import React from 'react'
import { AppBar, IconButton, Toolbar } from '@mui/material'
import { MenuOutlined } from '@mui/icons-material';

export const Navbar = () => {
  return (
    <AppBar //** Es como un navbar */
        position='fixed' //** Posicion Fija */
        sx={{ }}
    >
        <Toolbar> {/* Similar a la tabla de Excell */}
            <IconButton> {/* Botones con figuritas */}
                <MenuOutlined /> {/* Menu fuera de la linea */}
            </IconButton>
        </Toolbar>
    </AppBar> 
  )
}
