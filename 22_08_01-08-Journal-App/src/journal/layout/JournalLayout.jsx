import React from 'react'
import { Box } from '@mui/system/';
import { Navbar, SideBar } from '../components';
import { Toolbar } from '@mui/material';

const drawerWidth = 240; //** Variable especial de asignacion espacio inicial en blanco (Solo funciona en ecomponente importados aqui) */

export const JournalLayout = ({ children }) => { //** Componente que recibe el children, renderizado en JournalPage */
  return (
    <Box sx={{ display: 'flex' }}> {/* Box=Caja(Abarca todo el ancho), display:flex=(Elementos en la misma fila ) */}

      <Navbar drawerWidth={ drawerWidth }/> {/* Importo Navbar, le asigno un tamaño del espacio inicial en blanco L5 */}

      <SideBar drawerWidth={ drawerWidth }/> {/* Como lo importe, debo definirlo, atencion arriba */}

      <Box 
        component='main' //** Nombre del componente principal, como si fuera un div */
        sx={{ flexGrow: 1, p: 3 }} //** flexGrow=Elemento que domina en anchura, p=padding 3, anchura del texto hacia afuera de enmedio */
        >
          <Toolbar /> {/* Asigna el espacio de la caja azul hacia abajo el componente de NothingSelectedView */}

          {children} {/* Renderizo el children de JournalPage, que retorna JournalLayout con sus componentes dentro */}

      </Box>
    </Box>
  )
}