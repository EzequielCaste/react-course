import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import Swal from "sweetalert2";

import '@testing-library/jest-dom';
import { startLogin } from "../../actions/auth";
import { types } from "../../types/types";

jest.mock('sweetalert2', () => ({
  fire: jest.fn()
}));

const middlewares = [ thunk ];
const mockStore = configureStore(middlewares);

const initState = {};
let store = mockStore(initState);

Storage.prototype.setItem = jest.fn();

describe('Pruebas en las acciones Auth', () => {

  beforeEach( () => {
    store = mockStore(initState);
    jest.clearAllMocks();
  });

  test('startLogin correcto', async() => {    

    await store.dispatch( startLogin('eze@gmail.com', '123456') );

    const actions = store.getActions();

    expect( actions[0] ).toEqual({
      type: types.authLogin, 
      payload: {
        uid: expect.any(String),
        name: 'Ezequiel123'
      }
    });

    expect( localStorage.setItem ).toHaveBeenCalledWith(
      'token', expect.any(String)
    );
    expect( localStorage.setItem ).toHaveBeenCalledWith(
      'token-init-date', expect.any(Number)
    );

    // token = localStorage.setItem.mock.calls[0][1]

  })

  test('startLogin incorrecto ', async() => {

    await store.dispatch( startLogin('eze@gmail.com', '123555456') );
    let actions = store.getActions();

    expect(actions).toEqual([]);
    expect( Swal.fire ).toHaveBeenCalledWith("Error", "Contactar al administrador", "error");

    await store.dispatch( startLogin('eze@gmail234.com', '123456') );
    actions = store.getActions();
    expect( Swal.fire ).toHaveBeenCalledWith("Error", "Usuario o contraseña incorrectas", "error");
    
  })

})