//**_______________________________________________________________________________________________________________________________________________*/
import React from 'react'
import { mount } from 'enzyme'
import { HeroScreen } from '../../../components/heroes/HeroScreen';
import { MemoryRouter, Route } from 'react-router-dom';

describe('Pruebas en <HeroScreen />', () => {
    
    const history = { //** Como HeroScreen recibe history, voy a crear esta dependencia para mandar, para falsear el mook components/heroes/HS l6 */
        length: 10, //** Tengo definido que el length debe ser mayor a 2, para usar el push, osea regresarme a marvel */
        push: jest.fn(), //** push, osea que me lleve al inicio */
        goBack: jest.fn(), //** Para irme una pagina atras */
    }

    // const wrapper = mount( //** Hago un Mount, porque voy recibir un argumento */
    //     <MemoryRouter initialEntries={['/hero']}> {/* Tengo un string vacio, necesito iE con URL y argumentos que debo enviar mando el '/hero' */}
    //         <HeroScreen history={ history } /> {/* HeroScreen necesita el history, mando el que esta l9 */}
    //     </MemoryRouter>
    // );

    test('Debe de mostrar el componente redirect si no hay argumentos en el URL', () => {

        const wrapper = mount( //** Hago un Mount, porque voy recibir un argumento */
        <MemoryRouter initialEntries={['/hero']}> {/* Tengo un string vacio, necesito iE con URL y argumentos que debo enviar, y mando el '/hero' */}
            <HeroScreen history={ history } /> {/* HeroScreen necesita el history, mando el que esta l9 */}
        </MemoryRouter>
    );
        
        expect( wrapper ).toMatchSnapshot() //** Para crear el snapshot */
        expect( wrapper.find('Redirect').exists() ).toBe(true); //** Debo de ver que el componente Redirect exista */
    })

    test('Debe de mostrar un heroe si el parametro existe y se encuentra', () => {
        
        const wrapper = mount( //** Como tiene dependencias, es decir recibe argumentos */
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>  {/* iE necesita una URL y le mando este link */}
                {/* Debo de especificar la ruta, porque trabajo con uP en HS l8 - Necesita la ruta de DashboarRoutes para mostrar HeroScreen */}
                <Route path="/hero/:heroeId" component={ HeroScreen } /> {/* Por eso puse ese path y esta linea igual */}
            </MemoryRouter>
        )

        expect( wrapper.find('.row').exists() ).toBe(true) //** Si sale row(fila) entonces si existe y esta bien la pantalla de HS */
    })

    test('Debe de regresar a la pantalla anterior con PUSH', () => {
        
        const history = { 
        length: 1, //** Para usar el push, debe ser menor a 2 */
        push: jest.fn(),
        goBack: jest.fn(),
    }
    
    const wrapper = mount(
        <MemoryRouter initialEntries={['/hero/marvel-spider']}> {/* iE me pide un URL valido */}
            <Route
                path="/hero/:heroeId" 
                //** Ruta del DR, pero renderizo como si fuera una funcion que recibe los props que manda el route del componente */
                component={ () => <HeroScreen history={ history } /> } //** Renderizo HS y el que me intersa es history y mando el history l47 */
            />
        </MemoryRouter>
        )

        wrapper.find('button').prop('onClick')() //** Busco la propiedad onClick del boton */

        expect( history.push ).toHaveBeenCalledWith('/') //** Asi funciona el push, asi que mando el argumento con que fue llamado */
        expect( history.goBack ).not.toHaveBeenCalled() //** Asegurarme que esta no haya sido llamada */
    })

    test('Debe de regresar a la pantalla anterior GOBACK', () => {
        
        //** Es la funcion definida arriba */
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route
                    path="/hero/:heroeId" 
                    component={ () => <HeroScreen history={ history } /> } 
                />
            </MemoryRouter>
            )
    
            wrapper.find('button').prop('onClick')()
    
            expect( history.push ).toHaveBeenCalledTimes(0) //** Que haya sido llamado 0 veces o nunca */
            expect( history.goBack ).toHaveBeenCalled() //** Que haya sido llamado, ya que push no lo fue */
    })

    test('debe de llamar el redirect si el heroe no existe', () => {
        
        //** Misma funcion de arriba */
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider0']}> {/* Pero mando un URL que no existe */}
                <Route
                    path="/hero/:heroeId" 
                    component={ () => <HeroScreen history={ history } /> } 
                />
            </MemoryRouter>
            )

            // console.log( wrapper.html() ); //** Se ve como un string vacio */
    
            expect( wrapper.text() ).toBe(' '); //** Debo de ponerle espacio, por los comentarios */
    })
})