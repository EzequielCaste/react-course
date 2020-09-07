import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {createSerializer} from 'enzyme-to-json';
import Swal from 'sweetalert2';
 
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));
Enzyme.configure({ adapter: new Adapter() });

jest.mock('sweetalert2', () => ({
  fire: jest.fn(),
  close: jest.fn()
}));