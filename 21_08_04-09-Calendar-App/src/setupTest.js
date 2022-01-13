//**_______________________________________________________________________________________________________________________________________________*/
//** npm install --save-dev @wojtekmaj/enzyme-adapter-react-17 */
//** npm install --save-dev enzyme-to-json */
//** npm install redux-mock-store --save-dev */
//** npm run test = es para levantar el entorno de pruebas */
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {createSerializer} from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));