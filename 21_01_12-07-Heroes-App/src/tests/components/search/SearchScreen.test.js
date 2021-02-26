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
        expect( wrapper.find('.alert-info').text().trim() ).toBe('Search a Hero') //** Aqui voy a buscar un elemento por la clase y esperaria que ese texto sea Search a hero */
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
})