import { AddOutlined } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react' //** FC */
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../views/'


export const JournalPage = () => {
  return (
    <JournalLayout> {/* Renderizo el JournalLayout */}

      {/* Oculto este Componente */}
        <NothingSelectedView /> {/* Importo este FC que es todo el contenido abajo del Navbar y alado del SideBar */}

         {/* <NoteView /> {/* Componente oculto que son las imagenes */}

        <IconButton //** Esta es una bolita que con over se pone mas gris */
        size="large" //** Hice la bolita mas grande */
        sx={{ //** Estilos extra */
          color: "white", //** Lo que esta dentro es color blanco, texto */
          
          backgroundColor: 'error.main', //** Todo el icono es color rojo */
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 }, //** Cuando le pase el mouse se vuelve un poco mas claro */
          // ':hover': { backgroundColor: 'error.main', filter: "brightness(0.4)" } //** Cuando le pase el mouse se vuelve un poco mas oscuro */
          position: 'fixed', //** Posicion fija sobre todos los elementos */
          right: 50, //** Espacio que deja hacia la izquierda desde la derecha */
          bottom: 50 //** Espacio que deja de abajo hacia arriba */
        }}
        >
        <AddOutlined sx={{ fontSize: 30 }} /> {/* Agregemos un signo de mas dentro del icono y estilo extra para hacerlo mas grande */}
        </IconButton>

    </JournalLayout> 
  )
}