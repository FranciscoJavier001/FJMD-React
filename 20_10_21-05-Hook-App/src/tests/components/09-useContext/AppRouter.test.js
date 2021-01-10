import React from 'react'; //** Importamos Reacr porque voy a ocupar JSX */
import { mount } from 'enzyme';
import { AppRouter } from '../../../components/09-useContext/AppRouter';
import { UserContext } from '../../../components/09-useContext/UserContext';


describe('Pruebas en <AppRouter/>', () => { //** Reviso si necesito algun argumento, si es una funcion de flecha vacia no vamos a necesitar ningun argumento */
    
    const user = { //** Vamos a definir el user (que es el que me esta dando falla), este tiene un id y un nombre */
        id: 1,
        name: 'Francisco'
    }

    const wrapper = mount(  //** Vamos a utilizarlo con mount porque necesito renderizarlo y realizar cosas internasdel AppRouter */
        <UserContext.Provider value={{ //** Necesitamos proveer el UserContext, porque si no el wrapper va a fallar, para importarlo usamos el Provider, este provider va a ser un objeto que tenga el user */
            user
        }}>
            <AppRouter /> 
        </UserContext.Provider>
    );


    test('debe de mostrarse correctamente', () => { //** Debe hacer match con el SnapShot */

        expect( wrapper ).toMatchSnapshot();  
    })
})