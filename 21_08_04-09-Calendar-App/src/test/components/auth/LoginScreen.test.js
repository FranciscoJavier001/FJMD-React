//**_______________________________________________________________________________________________________________________________________________*/
import Enzyme from 'enzyme'; //** Si no tengo estos me manda falla */
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'; //** Si no tengo estos me manda falla */
import {createSerializer} from 'enzyme-to-json';
import { LoginScreen } from '../../../components/auth/LoginScreen';

Enzyme.configure({ adapter: new Adapter() }); //** Si no tengo estos me manda falla */
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

const middlewares = [ thunk ] //** Funcion que se invoca despues de que se envia una accion, puede modificarla, esperar que termine o cancelarla */
const mockStore = configureStore( middlewares ) //** MockStore es un objero que simula ser otro y el store configura funciones de los moddleware */

import { mount } from 'enzyme'
import { Provider } from 'react-redux' //** Para utilizar el mount necesito un componente llamado Provider */

import configureStore from 'redux-mock-store' //** Para configurar el store */
import thunk from 'redux-thunk' //** La de arriba ocupa esta porque las acciones retornan una funcion */

const initState = {} //** Configuro el iS, que asi quiero cuando inicie las pruebas */
const store = mockStore( initState ) //** Este va con el berofeEach para inicializar todas las acciones que este store haya ejecutado */

const wrapper = mount( //** Dentro necesito el componente llamado Provider */
    <Provider store={ store }> {/* Esto me va a proveer el store, pero debo de crearlo, dentro mando el store creado anteriormente */}
        <LoginScreen />{/* Dentro de este HOC voy a colocar el evento a analizar */}
    </Provider>
)

describe('Pruebas en <LoginScreen />', () => {
    
    test('debe mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot()
    })  
})