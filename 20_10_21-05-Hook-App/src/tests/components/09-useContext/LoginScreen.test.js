import React from 'react'; //** Importamos React porque vamos a utilizar JSX */
import { mount } from 'enzyme';
import { UserContext } from '../../../components/09-useContext/UserContext';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';


describe('Pruebas en <LoginScreen />', () => { //** No hay ninguna propiedad, porque ya confirmamos que no recibe ningun argumento en el LoginScreen */
    
    const setUser = jest.fn(); //** setUser va a ser igual a jest.fn()  */
    
    const wrapper = mount( //** Aqui vamos a usar el wrapper, vamos a utilizar el mount (el shallow no porque no vamos a poder ver todo), creamos la constanste wrapper que va a ser igual a mount (aseguramos que se importe de enzyme), vamos a definir el UserContext.Provider (hay que confirmar que se importe el UserContext) y el value tiene que se igual como lo hayamos visto, cerramos el UserContext.provider y adentro vamos a renderizar el LoginScreen (que es el sujeto de pruebas, nos aseguramos de importarlo) y lo que vamos a proveer en este context va a ser el setUser, ara evaluar el setUser vamos a colocarlo afuera en la linea 9, y entonces ese lo vamos a mandar como argumento */
        <UserContext.Provider value={{
            setUser
        }}>
            <LoginScreen />
        </UserContext.Provider>
    )

    test('debe de mostrarse correctamente', () => { //** Aqui hacemos Match con el snapShot */
        expect( wrapper ).toMatchSnapshot(); //** Para hacer la prueba con el SnapShot, el wrapper debe de hacer match con el snapshot, (checamos que se haya hecho una nueva prueba) */
    });


    test('debe de ejecutar el setUser con el argumento esperado', () => { //** El argumeto esperado debe ser lo que esta en el onClick que manda la funcion de setUser y que sea llamado con el id que hayamos colocado y con el nombre que hayamos escrito, eso se necesita evaluar */
       
        wrapper.find('button').prop('onClick')(); //** Vamos a hacer la prueba con el boton asi que wrapper.find, voy a buscar el boton con el prop (property) de la simulacion onClick y es una funcion que voy a mandar a llamar, una vez que hago click en ese boton voy a esperar que setUser haya sido llamado con ciertos argumentos */

        expect( setUser ).toHaveBeenCalledWith({ //** Entonces esperamos que haya sido llamado con estos argumentos, con un objeto que debe ser el argumento que tengo en el LoginScreen en el setUser */
            id: 123,
            name: 'Francisco'
        })
        
    });
})