import React from 'react';
import ReactDOM from 'react-dom';

import { JournalApp } from './JournalApp';
//** Los cambios que estoy implementando en styles.scss se ven reflejados ya, porque ya importe lo que necesito */
import './styles/styles.scss'

ReactDOM.render(
    <JournalApp />,
  document.getElementById('root')
);