import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { JournalApp } from './JournalApp'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* Para usar el BR */}
      <JournalApp /> {/* App que vamos a renderizar de las Rutas */}
    </BrowserRouter>
  </React.StrictMode>
)