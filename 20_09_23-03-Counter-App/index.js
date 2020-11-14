import React from 'react';
import ReactDOM from 'react-dom';
// import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';

import './index.css'

const divRoot = document.querySelector('#mainApp'); //** Devuelve el primer elemeto del documento, que coincida con el grupo de selectores */

// ReactDOM.render(<PrimeraApp saludo="Hola, Soy Francisco"/>, divRoot); //** Al dejarla con el /> queda claro que es un functional component y este es el prop*/
ReactDOM.render(<CounterApp value={10} />, divRoot); //** Lo renderizamos, ponemos el nombre del Functionl component, asignamos el valor y luego lo mosramos con el divRoot */