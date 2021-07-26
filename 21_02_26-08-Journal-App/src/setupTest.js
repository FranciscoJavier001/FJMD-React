import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {createSerializer} from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

configure({adapter: new Adapter()});

const noScroll = () => {}
Object.defineProperties( window, 'scrollTo', { value: noScroll, writable: true} )