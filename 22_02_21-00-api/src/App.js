import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink
} from "react-router-dom"
import { Inicio } from './components/Inicio'
import { Practica } from './components/Practica'

function App() {
  return (
      <BrowserRouter>
      <div className="container mt-5">
        <div className="btn-group">
          <NavLink to="/" className="btn btn-secondary">
            Inicio
          </NavLink>
          <NavLink to="/practica" className="btn btn-primary">
            Practica
          </NavLink>
        </div>
        <h1>Navbar</h1>
        <hr />
          <Routes>
            <Route path="/" exact element={<Inicio />} />
            <Route path="/practica"element={<Practica />} />
          </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App