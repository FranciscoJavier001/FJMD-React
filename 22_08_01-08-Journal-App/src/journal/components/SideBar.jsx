import React from 'react'
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material/'
import { TurnedInNot } from '@mui/icons-material'

export const SideBar = ({ drawerWidth= 240 }) => { //** Recibo ese componente, para saber el espacio que debe tener */
  return (
    <Box
        component='nav' //** Nombre del componente */
        sx={{ 
            width: { xs: drawerWidth }, //** width-Para tener la separacion debajo del componente */
            flexShrink: { xs: 0 } }} //** Tamaño de cada uno, entre mayor se vuelve mas chico */
    >
        <Drawer
            variant="permanent" //** Es la barra de lado izquierdo, mantenerla siempre */
            open='true' //** Siempre va a mostrarse */
            sx={{
                display: { xs: 'block' }, //** Sgnifica que tomen todo el ancho asignado, lo siguiente es para colocarlo */
                '& .MuiDrawer-paper': { boxSizing: 'content-box', width: drawerWidth } //** Mantenerse en la caja, y que tengan el tamaño asignado */
            }}
        >
          
          <Toolbar> {/* La barra donde va el nombre */}
            <Typography variant='h6' align='center' noWrap component='div'> {/* Titulo, Centrado, No sobrepase el espacio, nombre componente */}
                Francisco Javier Martinez Duran  
                </Typography>
          </Toolbar>

          <Divider /> {/* La linea divisora */}

          <List> {/* La lista */}
            {
                //** Un array con meses, map para mapearlo, y su nombre text es una funcion */
                ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'].map( text => (
                    <ListItem key={ text } disablePadding> {/* Vamos a listar los items, y sin padding */}
                        <ListItemButton> {/* Para darle un click y hagan un efecto de transicion de click */}
                            <ListItemIcon> {/* Para que tengan su espacio y no esten hasta la izquierda amontonados  */}
                                <TurnedInNot /> {/* Como la banderita */}
                            </ListItemIcon>
                            <Grid container> {/* Van a ser dos contenedores, mes y texto */}
                                <ListItemText primary={ text } /> {/* Primera linea solo el mes */}
                                <ListItemText secondary={ 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' } /> {/* Texto */}
                            </Grid>
                        </ListItemButton>
                    </ListItem>
                ))
            }
          </List>

        </Drawer>
    </Box>
  )
}