import React from 'react'
import { AppBar, IconButton, Toolbar, Grid, Typography } from '@mui/material'
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';

export const Navbar = ({ drawerWidth = 240 }) => { //** Recibo el ancho que va a tener el elemento */
  return (
    <AppBar //** Barra que se expande hasta el final, tipo navbar, la puse de azul oscura */
        position='fixed' //** Posicion Fija de la barra de arriba */
        sx={{ //** Asi defino en que casos entran, en que pantallas pequeñas con { sm } */
            width: { xs: `calc(100% - ${ drawerWidth }px)` }, //** Pantallas pequeñas, 100% - ancho, para que desaparezca */
            ml: { xs: `${ drawerWidth }px` }, //** Margen izquierdo del toggle, de la barra en pantallas pequeñas */
         }}
    >

        <Toolbar> {/* Da estilos como un navbar, para que todo siga en una linea en pantallas pequeñas */}
        
            <IconButton /* Es para iniciar el toggle */
                color='inherit' //** Color asignado donde se despliega el menu */
                edge='start' //** Posicion donde se despliega funcion de boton del togle */
                sx={{ mr: 2, display: {xs: 'none' } }} //** Margen derecho 2, alejo letras, solo muestro boton toggle en pantallas pequeñas */
            >

                <MenuOutlined /> {/* Es lo que aparece en el pantallas sm, es el recuadro con tablas */}

            </IconButton>

            {/*Contenedor, todo en una sola direccion, aleja los elementos hasta las esquinas, centra mas el texto */}
            <Grid container direction='row' justifyContent='space-between' alignItems='center'>

                {/* Tamaño de letra, en caso que no quepa el texto, se quedan unos ..., lo mostramos como un div */}
                <Typography variant='h6' noWrap component='div'>JournalApp</Typography>

                    <IconButton color='error'> {/* Le asignamos un color al boton */}

                <LogoutOutlined /> {/* Es el simbolo de la puerta de salida */}
            
              </IconButton>
            </Grid>
        </Toolbar>
    </AppBar> 
  )
}