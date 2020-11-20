import React from 'react'
import {shallow} from 'enzyme' //** Este se importa de enzyme */
import { GifGridItem } from '../../components/GifGridItem'

describe('Pruebas en <GifGridItem />', () => { //** Al componente que le vamos a hacer la prueba */

    const title = "Un titulo"; //** Como ahora le pusimos que isRequired estos son los argumentos que va a agarrar */
    const url = 'http://localhost/algo.jpg'; //** Como ahora le pusimos que isRequired estos son los argumentos que va a agarrar */

    test('debe de mostrar el componente correctamente', () => {
        
        const wrapper = shallow(<GifGridItem title={title} url={url}/>) //** se crea una constante y GifGridItem es el sujeto de prueba y con esto se empieza a usar React, por eso lo importamos, pusimos el title y url porque lo metimos isRequired en la carpeta de GifGridItem */

        expect(wrapper).toMatchSnapshot(); //** Aqui vemos si el Snapchot es lo que el queria */
    })
    
})
