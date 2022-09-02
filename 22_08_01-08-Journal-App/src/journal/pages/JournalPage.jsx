import React from 'react' //** FC */
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../views/'


export const JournalPage = () => {
  return (
    <JournalLayout> {/* Renderizo el JournalLayout */}

      {/* Oculto este Componente */}
      {/* <NothingSelectedView /> {/* Importo este FC que es todo el contenido abajo del Navbar y alado del SideBar */}

        <NoteView /> {/* Muestro este Componente */}
        
    </JournalLayout>
  )
}