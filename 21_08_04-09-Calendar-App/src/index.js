import React from 'react';
import ReactDOM from 'react-dom';
import { CalendarApp } from './CalendarApp';

import './styles.css'; //** La importacion por default */

// console.log(process.env); //** Para ver si estoy en developer & production */

ReactDOM.render(
    <CalendarApp />, //** Recuerda cambiarle el nombre del archivo que vamos a llamar, y recuerda importarlo */
  document.getElementById('root')
);
