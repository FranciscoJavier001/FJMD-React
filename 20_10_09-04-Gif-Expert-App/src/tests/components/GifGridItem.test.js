import React from 'react'
import {shallow} from 'enzyme' //** Este se importa de enzyme */
import { GifGridItem } from '../../components/GifGridItem'

describe('Pruebas en <GifGridItem />', () => { //** Al componente que le vamos a hacer la prueba */
    
    const title = "Un titulo"; //** Como ahora le pusimos que isRequired estos son los argumentos que va a agarrar */
    const url = 'http://localhost/algo.jpg'; //** Como ahora le pusimos que isRequired estos son los argumentos que va a agarrar */
    
    //** Como este no se piensa cambiar, lo dejamos inicializado arriba */
    const wrapper = shallow(<GifGridItem title={title} url={url}/>) //** se crea una constante y GifGridItem es el sujeto de prueba y con esto se empieza a usar React, por eso lo importamos, pusimos el title y url porque lo metimos isRequired en la carpeta de GifGridItem */

    test('debe de mostrar el componente correctamente', () => {
        
        expect(wrapper).toMatchSnapshot(); //** Aqui vemos si el Snapchot es lo que el queria */
    })

    test('Debe de tener un parrafo con el title', () => { //** Asi se hacen las pruebas */

        const p = wrapper.find('p'); //** Aqui se obtiene la referencia al parrafo, es decir, con la instruccion se busca el parrafo */
        expect(p.text().trim()).toBe(title); //** Esperamos que el contenido del parrafo, trim(por si acaso hay un espacio en blanco) y el toBe (tiene que ser el titulo) y el titulo es lo que esta abajo de cada imagen */
    })

    test('Debe de tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img'); //** Hacemos la referencia a la imagen */
        // console.log(img.props()); //** Asi vemos todo el objeto, como esta implementado */

        expect(img.prop('src')).toBe(url) //** Aqui esperamos que el src sea igual al url */
        expect(img.prop('alt')).toBe(title) //** Aqui esperamos que el alt sea igual al title */
    })

    test('Debe de tener animate__fadeIn', () => {
        const div = wrapper.find('div'); //** Aqui buscamos el div */
        // console.log(div.props()); //** Asi vemos las props que tiene el div en el GifGridItem */
        // console.log(div.prop('className')); //** Asi vemos las props que tiene el div en el GifGridItem, pero especifica */
        const className = div.prop('className') //** Aqui vemos las propiedades del div, y como lo vemos arriba accedemos a las props y a la que es className */

        expect(className.includes('animate__fadeIn')).toBe(true) //** Si el className incluye 'lo que busco' entonces que pase la prueba */     
    })
})