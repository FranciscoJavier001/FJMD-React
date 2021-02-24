import React from 'react'
import { shallow, mount } from 'enzyme'
import { HeroScreen } from '../../../components/heroes/HeroScreen';
import { MemoryRouter, Route } from 'react-router-dom';

describe('Pruebas en <HeroScreen />', () => {
    
    //** Tenemos una dependencia que tenemos que mandar que es el history */
    const history = { //** Que vamos a necesitar de el */
        length: 10,
        push: jest.fn(),
        goBack: jest.fn(),
    }

    // //** Siempre hay que definir primero si vamos a usar un mount o un shallow */
    // const wrapper = mount(
    //     // initialEntries va a ser un objeto que nosotros vamos a definir con el url y con los argumentos que necesitamos enviarle
    //     <MemoryRouter initialEntries={['/hero']}>
    //     {/* Aqui ponemos lo que vamos a renderizar, de igual manera tiene que tener un history, pero le vamos a mandar el que acabamos de crear arriba */}
    //     <HeroScreen history={ history } />
    //     </MemoryRouter>
    // );

    test('Debe de mostrar el componente redirect si no hay argumentos en el URL', () => {

        const wrapper = mount(
            // initialEntries va a ser un objeto que nosotros vamos a definir con el url y con los argumentos que necesitamos enviarle
            <MemoryRouter initialEntries={['/hero']}>
            {/* Aqui ponemos lo que vamos a renderizar, de igual manera tiene que tener un history, pero le vamos a mandar el que acabamos de crear arriba */}
            <HeroScreen history={ history } />
            </MemoryRouter>
        );
        
        //** Vamos a hacer match con el snapshot */
        // expect( wrapper ).toMatchSnapshot()
        expect( wrapper.find('Redirect').exists() ).toBe(true);
    })

    test('Debe de mostrar un heroe si el parametro existe y se encuentra', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                {/* Aqui tengo que mandarle una ruta ficticia que tiene que ser el path al que yo tengo definido en mi AppRouter/DashboardRoutes y el componente va a ser igual al HeroScreen */}
                <Route path="/hero/:heroeId" component={ HeroScreen } />
            </MemoryRouter>
        )

        // Con este comprobamos que si se haya mostrado la tarjeta del heroe, porque con el row ya es mas que suficiente
        expect( wrapper.find('.row').exists() ).toBe(true)
    })

    test('Debe de regresar a la pantalla anterior con PUSH', () => {
        
        // Para esto hay que cambiarle el history
        //** Tenemos una dependencia que tenemos que mandar que es el history */
        const history = { //** Que vamos a necesitar de el */
        length: 1,
        push: jest.fn(),
        goBack: jest.fn(),
    }
    
    const wrapper = mount(
        <MemoryRouter initialEntries={['/hero/marvel-spider']}>
            {/* Aqui tengo que mandarle una ruta ficticia que tiene que ser el path al que yo tengo definido en mi AppRouter/DashboardRoutes y el componente va a ser igual al HeroScreen, pero aqui necesitamos mandar el history porque lo tenemos de argumento, pero la diferencia es que aqui el componente lo voy a renderizar con una funcion, pero voy a recibir los props que va a mandar el rote a ese componente y voy a renderizar el HeroScreen y los props que le voy a mandar el unico que me interesa es el history, que tengo personalizado arriba de en lo primero de esta prueba */}
            <Route
                path="/hero/:heroeId" 
                component={ () => <HeroScreen history={ history } /> } 
            />
        </MemoryRouter>
        )

        //** Ahora voy a probar la interaccion con el click, para esto voy a buscar el boton, con la propiedad de onClick que se va a disparar la funcion */
        wrapper.find('button').prop('onClick')()

        //** Deberia esperar que el history.push tiene que haber sido llamado con el argumento como este especificado y tambien que el goBack no haya sido llamada */
        expect( history.push ).toHaveBeenCalledWith('/')
        expect( history.goBack ).not.toHaveBeenCalled()
    })

    test('Debe de regresar a la pantalla anterior GOBACK', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                {/* Aqui tengo que mandarle una ruta ficticia que tiene que ser el path al que yo tengo definido en mi AppRouter/DashboardRoutes y el componente va a ser igual al HeroScreen, pero aqui necesitamos mandar el history porque lo tenemos de argumento, pero la diferencia es que aqui el componente lo voy a renderizar con una funcion, pero voy a recibir los props que va a mandar el rote a ese componente y voy a renderizar el HeroScreen y los props que le voy a mandar el unico que me interesa es el history, que tengo personalizado arriba de en lo primero de esta prueba */}
                <Route
                    path="/hero/:heroeId" 
                    component={ () => <HeroScreen history={ history } /> } 
                />
            </MemoryRouter>
            )
    
            //** Ahora voy a probar la interaccion con el click, para esto voy a buscar el boton, con la propiedad de onClick que se va a disparar la funcion */
            wrapper.find('button').prop('onClick')()
    
            //** Deberia esperar que el history.push tiene que haber sido llamado con el argumento como este especificado y tambien que el goBack no haya sido llamada */
            expect( history.push ).toHaveBeenCalledTimes(0) //** Que haya sido llamado 0 veces */
            expect( history.goBack ).toHaveBeenCalled() //** Que haya sido llamado */
    })

    test('debe de llamar el redirect si el heroe no existe', () => {
        

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider0']}>
                {/* Aqui tengo que mandarle una ruta ficticia que tiene que ser el path al que yo tengo definido en mi AppRouter/DashboardRoutes y el componente va a ser igual al HeroScreen, pero aqui necesitamos mandar el history porque lo tenemos de argumento, pero la diferencia es que aqui el componente lo voy a renderizar con una funcion, pero voy a recibir los props que va a mandar el rote a ese componente y voy a renderizar el HeroScreen y los props que le voy a mandar el unico que me interesa es el history, que tengo personalizado arriba de en lo primero de esta prueba */}
                <Route
                    path="/hero/:heroeId" 
                    component={ () => <HeroScreen history={ history } /> } 
                />
            </MemoryRouter>
            )
    
            // Si el heroe no existe debe mostrar un string vacio
            expect( wrapper.text() ).toBe('');
    })
})