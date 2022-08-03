import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom' //** Para usarlas de RRD */

import { LoginPage, RegisterPage } from '../pages' //** Para usarlas de RRD */

export const AuthRoutes = () => {
  return (
    <Routes> {/* Rutas a renderizar */}
        <Route path="login" element={ <LoginPage />} /> {/* Rutas, llevan auth/(cuaquiera de estos 2), solo entramos a uno de estos 2 */}
        <Route path="register" element={ <RegisterPage />} />

        <Route path="/*" element={ <Navigate to="/auth/login" />} /> {/* En caso que salga algo que no tengo definido */}
    </Routes>
  )
}