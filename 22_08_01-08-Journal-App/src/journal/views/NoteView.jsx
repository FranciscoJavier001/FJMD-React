import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { ImageGallery } from '../components'
import moment from 'moment' //** Para instalar yarn add moment */

export const NoteView = (date) => { //** Va a recibir la date(fecha) */

const noteDate = moment( date ) //** Esto es para mostrar la fecha exacta, lo uso en Typography */
    
  return (
    //** Grid me permite jugar con los elementos dentro de los elementos, box como div */
    /* Linea de Fecha y Boton Guardar, direccion como fila, justificacion esquinas, items en medio, margen hacia abajo */
    <Grid container direction="row" justifyContent='space-between' alignItems='center' sx={{ mb: 1}}> 
        
        <Grid item> {/* Contenedor en linea, donde primero va la fecha */}
            {/* Va a ser la fecha, con el tamaño grande, el tipo de letra delgada y con esto muestro mes/dia/año */}
            <Typography fontSize={ 39 } fontWeight='light'>{ noteDate.format('LL') }</Typography> 
        </Grid>
        <Grid item> {/* Este item es del boton */}
            <Button color="primary" sx={{ padding: 2 }}> {/* Color del boton y el pading del boton, de adentro hacia afuera */}
                <SaveOutlined sx={{ fontSize: 30, mr: 1 }}/> {/* Icono del boon, tamaño del icono y margen hacia la derecha hacia letras */}
                Save {/* Lo que dice */}
            </Button>
        </Grid>
    </Grid>
  )
}