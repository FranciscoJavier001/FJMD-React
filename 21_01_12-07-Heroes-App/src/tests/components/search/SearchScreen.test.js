//**_______________________________________________________________________________________________________________________________________________*/
import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter, Route } from 'react-router-dom'
import { SearchScreen } from '../../../components/search/SearchScreen'

describe('Pruebas en <SearchScreen />', () => {

    test('Debe de mostrarse correctamente con valores por defecto', () => {
        
        const wrapper = mount( //** Recibo componentes */
            <MemoryRouter initialEntries={['/search']}> {/* iE, debe ser el URL, porque voy a trabajar con rutas */}
                <Route path="/search" component={ SearchScreen } /> {/* Mandamos la ruta, y el componente que vamos a renderizar */}
            </MemoryRouter>
        )

        expect( wrapper ).toMatchSnapshot()
        expect( wrapper.find('.alert-info').text().trim() ).toBe('Resultado del SuperHeroe') //** Busco elemento por clase, sea lo que defini */
    })
    
    test('Debe de mosrar a Batman y el input con el valor del queryString', () => { //** Si mando algo por el URL */
        
        const wrapper = mount( //** Montamos el wrapper para trabajar con rutas */
            <MemoryRouter initialEntries={['/search?q=batman']}> {/* La iE que es la URL que voy a navegar */}
                <Route path="/search" component={ SearchScreen } /> {/* La ruta y el componente que voy a mostrar */}
            </MemoryRouter>
        )

        expect( wrapper.find('input').prop('value')).toBe('batman'); //** Busca en la propiedad del campo de texto el valor que sea batman */
        expect( wrapper ).toMatchSnapshot()
    })  
    
    test('Debe de mostrar un error si no se encuentra el Hero', () => {
        
        const wrapper = mount( //** Lo tengo definido arriba L23 */
            <MemoryRouter initialEntries={['/search?q=batman123']}> {/* Pero aqui busco un URL que no exista por el URL */}
                <Route path="/search" component={ SearchScreen } /> {/* El path y el component a renderizar */}
            </MemoryRouter>
        )

        expect( wrapper.find('.alert-danger').text().trim() ).toBe(`No Existe un SuperHeroe con el Nombre "batman123"`); //** Busco clase-mensaje */
        expect( wrapper ).toMatchSnapshot()
    })
    
    test('Debe de llamar el push del history', () => {
        
        const history = { //** s/c/s/SS-L10-Recibe el history y el push es una funcion que actualiza el path */
            push: jest.fn()
        }

        const wrapper = mount( 
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <Route
                    path="/search" //** Abajo recibo los props(no los mando), y renderizo el SS, mando el history, y tambien el que yo cree */
                    component={ () => <SearchScreen history={ history } /> }
                />
            </MemoryRouter>
        )

        wrapper.find('input').simulate('change', { //** Esta en s/c/s/SS-L29-32 */ -- //** Hago una simulacion en la caja de texto */
            target: { //** El evento que recibo debe tener el target y dentro el name y el value */
                name: 'searchText', //** Nombre de la caja de texto */
                value: 'batman' //** Lo que le voy a mandar */
            }
        })

        wrapper.find('form').prop('onSubmit')({ //** Esta en s/c/s/SS-L29-32 */ -- //** Hago el submit del formulario y necesito mandar el evento */
            preventDefault(){} //** Este es el evento que se manda */
        })

        expect( history.push ).toHaveBeenCalledWith(`?q=batman`) //** Esperaria que el (URL)=push haya sido llamado con batman, asi fue L52 */
    })  
})