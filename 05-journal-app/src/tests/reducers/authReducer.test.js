import '@testing-library/jest-dom';
const { authReducer } = require("../../reducers/authReducer");
const { types } = require("../../types/types");

describe('Pruebas en authReducer', () => {

  test('debe verificar el estado después de Login', () => {

    const action = {
      type: types.login,
      payload: {
        uid: '12456',
        displayName: 'Claudio'
      }
    }

    const state = authReducer( {}, action );

    expect( state ).toEqual({
      uid: '12456',
      name: 'Claudio'
    });
  });

  test('debe verificar el estado después de Logout', () => {

    const initState = {
      uid: 'asd123rsadf',
      name: 'Susana'
    }

    const action = {
      type: types.logout      
    }

    const state = authReducer( initState, action );

    expect( state ).toEqual({});
  });

  test('debe devolver el estado con cualquier otra acción', () => {
    const initState = {
      uid: 'asd123rsadf',
      name: 'Susana'
    }

    const action = {
      type: 'sdf'      
    }

    const state = authReducer( initState, action );

    expect( state ).toEqual(initState);
  })
  
})