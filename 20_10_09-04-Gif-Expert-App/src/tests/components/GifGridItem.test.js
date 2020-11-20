import React from 'react'
import {shallow} from 'enzyme' //** Este se importa de enzyme */
import { GifGridItem } from '../../components/GifGridItem'

describe('Pruebas en <GifGridItem />', () => { //** Al componente que le vamos a hacer la prueba */

    // const title = "Un titulo";
    // const url = 'http://localhost/algo.jpg';

    test('debe de mostrar el componente correctamente', () => {
        
        const wrapper = shallow(<GifGridItem />) //** se crea una constante y GifGridItem es el sujeto de prueba y con esto se empieza a usar React, por eso lo importamos */

        expect(wrapper).toMatchSnapshot(); //** Aqui vemos si el Snapchot es lo que el queria */
    })
    
})
