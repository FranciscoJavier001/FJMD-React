import React from 'react';
import {shallow} from 'enzyme'
import { AddCategory } from '../../components/AddCategory'

describe('Pruebas en <AddCategory />', () => {

    const setCategories = () => {} //** Se crea una funcion que no haga nada */

    test('Debe de mostrarse correctamente', () => {
        
        const wrapper = shallow (<AddCategory setCategories={setCategories}/>) //** Aqui se la pasamos como argumento para que pase la prueba */

        expect(wrapper).toMatchSnapshot();
    })
})
