import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { JournalRoutes } from '../journal/routes/JournalRoutes'

export const AppRouter = () => {
  return (
    <Routes> {/* Rutas */}
        {/* Login y Registro */}
        <Route path="/auth/*" element={ <AuthRoutes /> } /> {/* Definimos que mande login */}

        {/* JournalApp */}
        <Route path="/*" element={ <JournalRoutes /> } /> {/* En caso que venga algo que no es manda al JR */}
    </Routes>
  )
}