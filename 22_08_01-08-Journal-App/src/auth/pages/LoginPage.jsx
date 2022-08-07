import React from 'react' //** Solamente es un FC */
import { Grid } from '@mui/material'

export const LoginPage = () => {
  return (
    <Grid
      container //** Es un contenedor, osea lo defino como el background */
      spacing={ 0 } //** Spacio entre columnas hacia la derecha*/
      direction="column" //** Direccio es columnas, osea hacia abajo */
      alignItems="center" //** Centrado de Items en medio */
      justifyContent="center" //** Contenido centrado a la mitad */
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }} //** sx=Tengo acceso al theme.provider, src/theme/purpleTheme */
      >
        
    </Grid>
  )
}