import { StarOutline } from '@mui/icons-material'
import { Grid, Typography } from '@mui/material'
import React from 'react'

export const NothingSelectedView = () => {
  return (
    <Grid
      container //** Es un contenedor, osea lo defino como el background */
      spacing={ 0 } //** Spacio entre columnas hacia la derecha*/
      direction="column" //** Direccio es columnas, osea hacia abajo */
      alignItems="center" //** Centrado de Items en medio */
      justifyContent="center" //** Contenido centrado a la mitad */
      sx={{ minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main', borderRadius: 3 }} //** stylextra=Tengo acceso al theme.provider, src/theme/purpleTheme */
      >

        <Grid item xs={ 12 }>
          <StarOutline sx={{ fontSize: 100, color: 'white' }} />
        </Grid>
        <Grid item xs={ 12 }>
          <Typography color='white' variante='h5'>Create an Entry</Typography>
        </Grid>
      </Grid>
  )
}