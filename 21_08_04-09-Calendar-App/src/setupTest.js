//**_______________________________________________________________________________________________________________________________________________*/
//** npm install --save-dev @wojtekmaj/enzyme-adapter-react-17 */
//** npm install --save-dev enzyme-to-json */
//** npm install redux-mock-store --save-dev */
//** npm run test = es para levantar el entorno de pruebas */
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {createSerializer} from 'enzyme-to-json';
//** Tenia esta falla Error: Not implemented: HTMLCanvasElement.prototype.getContext - Entonces : terminal "npm i --save-dev jest-canvas-mock;" */
import 'jest-canvas-mock'; //** Lo importe, donde tenga esa falla */

Enzyme.configure({ adapter: new Adapter() });

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));


