import React from 'react' //** FC */
import { Typography } from "@mui/material"
import { JournalLayout } from '../layout/JournalLayout'

export const JournalPage = () => {
  return (
    <JournalLayout> {/* Renderizo el JournalLayout */}
      <Typography> {/* Solo texto */}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Iusto dignissimos eveniet rerum similique. 
        Ipsam, impedit odit reprehenderit id totam aut quibusdam. 
        Quae amet nesciunt hic iste. Ipsa dolores error asperiores.

        {/* NothingSelected */}
        {/* NoteView */}
        </Typography>
    </JournalLayout>
  )
}