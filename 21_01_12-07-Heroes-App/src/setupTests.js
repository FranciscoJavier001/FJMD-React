//** Hay que hacer la configuracion de enzyme y enzyme-to-json */

import Enzyme from 'enzyme';
import Adapter from 'enzyme-ada`ter-react-16';
import { createSerializer } from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

expect.addSnapshoterializer(createSerializer({mode: 'deep'}));