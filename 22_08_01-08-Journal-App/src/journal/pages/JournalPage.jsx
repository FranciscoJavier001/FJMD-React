import React from 'react' //** FC */
import { JournalLayout } from '../layout/JournalLayout'
import { NothingSelectedView } from '../views/'


export const JournalPage = () => {
  return (
    <JournalLayout> {/* Renderizo el JournalLayout */}
    
        <NothingSelectedView /> {/* Importo este FC que es todo el contenido abajo del Navbar y alado del SideBar */}
        
    </JournalLayout>
  )
}