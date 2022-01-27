//**_______________________________________________________________________________________________________________________________________________*/
import Enzyme from 'enzyme'; //** Si no tengo estos me manda falla */
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'; //** Si no tengo estos me manda falla */

Enzyme.configure({ adapter: new Adapter() }); //** Si no tengo estos me manda falla */

describe('Pruebas en <LoginScreen />', () => {
    
    test('debe mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot()
    })  
})