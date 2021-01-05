import React from 'react'; //** Importamos React porque lo vamos a ocupar */
import { mount } from 'enzyme';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en <HomeScreen />', () => { //** Pruebas en el nombre del componente, que no recibe ningun argumento */

    const user = { //** Creamos una funcion que diga que usr va a ser igual a un nombre y un email */
        name: 'Francisco',