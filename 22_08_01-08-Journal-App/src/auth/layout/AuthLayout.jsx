import React from 'react'
import { Grid, Typography } from '@mui/material'

export const AuthLayout = ({ children, title="" }) => { //** Desestructuro lo que quiero mandar o utilizar */
  return (

    <Grid
      container //** Es un contenedor, osea lo defino como el background */
      spacing={ 0 } //** Spacio entre columnas hacia la derecha*/
      direction="column" //** Direccio es columnas, osea hacia abajo */
      alignItems="center" //** Centrado de Items en medio */
      justifyContent="center" //** Contenido centrado a la mitad */
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }} //** stylextra=Tengo acceso al theme.provider, src/theme/purpleTheme */
      >
        
        <Grid item /* Caja de en medio */
          className="box-shadow" //** Defino clase en styes.css, es una sobra */
          xs={ 3 } //** Tamaño pantalla pequeña *
          sx={{ //** Estilos adicionales */
            width: { sm: '45%' }, //** Tamaño Estandar de la pantalla */
            backgroundColor: 'white', //** Fondo */
            padding: 3, //** Espacio de adentro hacia afuera de la caja blanca */
            borderRadius: 2 //** La caja blanca queda redondeada */
            }}>
            
            {/* Variables asignables, encabezado, alineacion, margen (se refleja arriba), mensaje superior */}
            <Typography variant="h4" align='center' sx={{ mb:1, fontWeight: 'bold' }}>{ title }</Typography>

        { children } {/* Lo que voy a renderizar, lo recibo porque ya lo desestructure */}

        </Grid>

    </Grid>
  )
}