import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {createSerializer} from 'enzyme-to-json';
import { Swal } from "sweetalert2";
 
Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

// Para evitar el Error: Not implemented: window.scrollTo
const noScroll = () => {};
Object.defineProperty( window, 'scrollTo', {value: noScroll, writable: true });

/*** 
* Para evitar errores en el sweet alert 
*/
// jest.mock('sweetalert2', () => ({
//     fire: jest.fn(),
//     close: jest.fn()
// }));

