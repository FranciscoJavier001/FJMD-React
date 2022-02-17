import React from 'react' //** Importamos React para las pruebas */
import '@testing-library/jest-dom' //** Para evitar errores de escritura */
import {shallow} from 'enzyme'  //** Importamos Shallow desde enzyme */
import { GifGrid } from '../../components/GifGrid' //** Importamos el componente al cual le vamos a hacr la prueba */
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs') //** El mook finge una llamada al archivo y controlar la informacion que va a responder */

describe('Pruebas en el <GifGrid/>', () => {
    
    const category = "Death Note"; //** category esta definida como requerida, por eso le ponemos algo para las pruebas */
    
    test('Debe de mostrarse corectamente', () => {

        useFetchGifs.mockReturnValue({ //** En las llaves va el objeto que va a tomar el componente del useFetchGifs en el GifGrid */
            data: [], //** Estos son los valores que el useFetchGifs regresa */
            loading: true
        }) //** Vamos a hacer una falsa implementacion */

        const wrapper = shallow(<GifGrid category={category}/>) //** El wrapper es por default con el shallos y pasandole el componente de cual es el sujeto de prueba y pasandole el argumento category porque es requerido */
        
        expect(wrapper).toMatchSnapshot(); //** Esto hace el snapshot */
    })

    // Deben de ser pruebas unitarias, debemos de probar los componentes de manera aislada

    test('Debe de mostrar items cuando se cargan imagenes con useFetchGifs', () => {
        //** Hacemos un mook que es commo finguir algo, para que el componente crea que tiene informacion con la data del customeHook, es decir como si ya me hubieran regresado la informacion cuando ya la cargo */

        const gifs = [{ //** Esta es la informacion que le vamos a pasar al arreglo de abajo */
            id: 'ABC',
            title: 'CualquierCosa',
            url: 'https://localhost/cualquier/cosa.jpg'
        },
    {
            id: '123',
            title: 'CualquierCosa',
            url: 'https://localhost/cualquier/cosa.jpg'
    }]

        useFetchGifs.mockReturnValue({ 
            data: gifs, //** La data van a ser los gifs */
            loading: false //** Esto es para decir que el loading ya se cargo  */
        })

        const wrapper = shallow(<GifGrid category={category}/>) //** Renderizamos el mismo componente, porque no lo pusimos arriba */

        expect(wrapper).toMatchSnapshot(); //** Es para crear el snapshot */
        expect(wrapper.find('p').exists()).toBe(false) //** Si el parrado eiste, yo esperaria que fuera false */
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)//** Asi seleccionamos un elemento en el GifGrid.test.js.snap, el length para saber cuantos gifs tengo */
    })
})