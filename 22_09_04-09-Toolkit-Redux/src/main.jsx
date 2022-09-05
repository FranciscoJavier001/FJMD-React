import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { store } from './store/store' //yarn add @reduxjs/toolkit
import { Provider } from 'react-redux' //** npm install --save react-redux */
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> {/* Utilizamos el Provider, de aqui saca info la App, por eso la envolvi */}
      <App /> {/* Aqui adentro, porque el Provider va a ser su informacion */}
    </Provider>
  </React.StrictMode>
)