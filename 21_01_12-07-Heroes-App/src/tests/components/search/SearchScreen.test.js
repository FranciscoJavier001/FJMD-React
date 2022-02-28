//**_______________________________________________________________________________________________________________________________________________*/
import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter, Route } from 'react-router-dom'
import { SearchScreen } from '../../../components/search/SearchScreen'

describe('Pruebas en <SearchScreen />', () => {    

    test('Debe de mostrarse correctamente con valores por defecto', () => {
        
        const wrapper = mount( //** Que necesito montar aqui, como voy a trabajar con rutas voy a necesitar el MemoryRoutes */
            //** Me hace falta el initialEntries y voy a ponerle que estoy en el '/search' */
            <MemoryRouter initialEntries={['/search']}>
                {/* Necesito una ruta en particular, porque si toco el Search se manda info por el URL, el path es el mismo donde estoy mostrando el componente y el componente que voy a mostrar va a ser el SearchScreen */}
                <Route path="/search" component={ SearchScreen } />
            </MemoryRouter>
        )

        expect( wrapper ).toMatchSnapshot()
        expect( wrapper.find('.alert-info').text().trim() ).toBe('Resultado del SuperHeroe') //** Aqui voy a buscar un elemento por la clase y esperaria que ese texto sea Search a hero */
    })
    
    //** Que pasa si mando info por el URL y asegurarme que la caja de texto tenga ese valor */
    test('Debe de mosrar a Batman y el input con el valor del queryString', () => {
        
        const wrapper = mount( //** Que necesito montar aqui, como voy a trabajar con rutas voy a necesitar el MemoryRoutes */
            //** Me hace falta el initialEntries y voy a ponerle que estoy en el '/search?=batman', esto es porque ahora el queryString va a ser Batman */
            <MemoryRouter initialEntries={['/search?q=batman']}>
                {/* Necesito una ruta en particular, porque si toco el Search se manda info por el URL, el path es el mismo donde estoy mostrando el componente y el componente que voy a mostrar va a ser el SearchScreen */}
                <Route path="/search" component={ SearchScreen } />
            </MemoryRouter>
        )

        expect( wrapper.find('input').prop('value')).toBe('batman');
        expect( wrapper ).toMatchSnapshot()
    })  
    
    test('Debe de mostrar un error si no se encuentra el Hero', () => {
        
        const wrapper = mount( //** Que necesito montar aqui, como voy a trabajar con rutas voy a necesitar el MemoryRoutes */
            //** Me hace falta el initialEntries y voy a ponerle que estoy en el '/search?=batman', esto es porque ahora el queryString va a ser Batman */
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                {/* Necesito una ruta en particular, porque si toco el Search se manda info por el URL, el path es el mismo donde estoy mostrando el componente y el componente que voy a mostrar va a ser el SearchScreen */}
                <Route path="/search" component={ SearchScreen } />
            </MemoryRouter>
        )

        expect( wrapper.find('.alert-danger').text().trim() ).toBe(`No Existe un SuperHeroe con el Nombre "batman123"`);
        expect( wrapper ).toMatchSnapshot()
    })
    
    //** El formulario cuando presionamos Enter manda la informacion de la caja de texto al URL y el URL recarga el componente y hace todo el procedimiento */
    test('Debe de llamar el push del history', () => {
        
        //** Debo de fingir el history */
        const history = {
            push: jest.fn()
        }

        //** Ahora nos toca montar el componente, con la unica diferencia de que aparte que estoy en la ruta search y es la ruta que se debe de mostrar tengo que mandar como argumento el history */
        const wrapper = mount( //** Que necesito montar aqui, como voy a trabajar con rutas voy a necesitar el MemoryRoutes */
            //** Me hace falta el initialEntries y voy a ponerle que estoy en el '/search?=batman', esto es porque ahora el queryString va a ser Batman */
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                {/* Necesito una ruta en particular, porque si toco el Search se manda info por el URL, el path es el mismo donde estoy mostrando el componente y el componente que voy a mostrar va a ser el SearchScreen */}
                <Route
                    path="/search"
                    // Aqui se recibiria los props, pero no los voy a utilizar, voy a utilizar una funcion de flecha que me regrese el SearchScreen (es el componente que regreso), pero tambien hay que mandarle el history, que va a ser el history que yo cree arriba que manda la funcion push con el jest.fn()
                    component={ () => <SearchScreen history={ history } /> } 
                />
            </MemoryRouter>
        )

        // 1.- Aqui hacemos el cambio en la caja de texto
        //** Simulemos acciones en el formulario */
        // Voy a buscar el input, pero cuando voy a hacer modificaciones a las cajas de texto usamos el simulate, porque nos da mas control, cuando es algo sencillo como una llamada prefiero usar el prop, aqui simulamos el change y el target que es un objeto, que debe tener el name que seria el name de la caja de texto en este caso seria searchText porque asi funciona el customHook, tambien necesita el value, y ahi voy a poner a batman
        wrapper.find('input').simulate('change', {
            target: {
                name: 'searchText',
                value: 'batman'
            }
        })

        // 2.- Aqui estamos haciendo el submit del formulario
        // Hagamos el submit del formulario, hi voy a buscar el form, con el prop y simularlo con el submit y el prop que me interesa es el onSubmit y parentesis asi que abro llaves, el event va a tener el preventDefault y voy a definir la funcion
        wrapper.find('form').prop('onSubmit')({
            preventDefault(){}
        })

        //** Espero que el history.push haya sido llamado con lo que esta dentro de la funcion del submit del handleSearch y mas especifico con el history.push y el searchText debe ser batman */
        expect( history.push ).toHaveBeenCalledWith(`?q=batman`)
    })  
})