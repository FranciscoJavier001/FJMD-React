import React from 'react'; //** Importamos React porque lo vamos a ocupar */
import { mount } from 'enzyme';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en <HomeScreen />', () => { //** Pruebas en el nombre del componente, que no recibe ningun argumento */

    const user = { //** Creamos una funcion que diga que usr va a ser igual a un nombre y un email */
        name: 'Francisco',
        email: 'francisco@gmail.com'
    }

    const wrapper = mount( //** Creamos nuestro wrapper, que va a ser igual al mount del homeScreen que se importa */
        <UserContext.Provider value={{ //** Asi establecemos el contexto de la prueba, asi lo creamos importando el provider y lo cerramos y aqui proveemos el user y la informacion que vamos a proveer sera la informacion que se me ocurra en las pruebas, ponemos value con doble llave porque como estamos utilizando nuestro contexto estamos retornando un objeto que tiene el usuario va a ser  el que creamos arriba */
            user
        }}>
            <HomeScreen />  
        </UserContext.Provider>
    );

    test('debe de mostrarse correctamente', () => { //** La prueba basica */

        
    })
})
