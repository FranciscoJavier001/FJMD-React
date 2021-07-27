import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {createSerializer} from 'enzyme-to-json';
import Swal from 'sweetalert2';
 
Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

//** Modifique este por el de abajo y funciono... */
// const noScroll = () => {}; 
// Object.defineProperty( window, 'scrollTo', { value: noScroll, writable: true } );

//** Tal vez ocupe alguna vez este */
//** const PlaywrightEnvironment = require('jest-playwright-preset/lib/PlaywrightEnvironment').getPlaywrightEnv('jsdom')   (Enter)   module.exports = PlaywrightEnvironment */

// jest.config.js
module.exports = {
    preset: 'jest-playwright-jsdom',
  }
  //** Aqui terminamos la modificacion */

jest.mock('sweetalert2', () => ({
   fire: jest.fn(),
   close: jest.fn(),
}));