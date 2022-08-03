import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { JournalPage } from '../pages/JournalPage'

export const JournalRoutes = () => {
  return (
    <Routes> {/* Rutas */}
        <Route path="/" element={ <JournalPage />} /> {/* Ruta que vamos a renderizar */}

        <Route path="/*" element={ <Navigate to="/" />} /> {/* Si viene algo que no esta definido renderizamos el / */}
    </Routes>
  )
}