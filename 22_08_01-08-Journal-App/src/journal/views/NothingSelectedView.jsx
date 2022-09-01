import { StarOutline } from '@mui/icons-material'
import { Grid, Typography } from '@mui/material'
import React from 'react'

export const NothingSelectedView = () => {
  return (
    <Grid
      container //** Es un contenedor, osea lo defino como el background, el color morado */
      spacing={ 0 } //** Spacio entre columnas hacia la derecha*/
      direction="column" //** Direccio es columnas, osea hacia abajo */
      alignItems="center" //** Centrado de Items en medio */
      justifyContent="center" //** Contenido centrado a la mitad */
      //** stylextra= Tamaño de la vista total y espacio menos de abajo, acceso al theme.provider, src/theme/purpleTheme */
      sx={{ minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main', borderRadius: 3 }} 
      >

        <Grid item xs={ 12 }>
          <StarOutline sx={{ fontSize: 100, color: 'white' }} /> {/* Tamaño color grande y blanco, la estrella */}
        </Grid>
        <Grid item xs={ 12 }>
          <Typography color='white' variante='h5'>Create an Entry</Typography> {/* Texto abajo de la estrella */}
        </Grid>
      </Grid>
  )
}