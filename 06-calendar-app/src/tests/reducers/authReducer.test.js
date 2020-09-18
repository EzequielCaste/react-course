import '@testing-library/jest-dom';

const { authReducer } = require("../../reducers/authReducer")
const { types } = require("../../types/types")

const initState = {
    checking: true,
    // uid: null,
    // name: null  
}

describe('Pruebas en authReducer', () => {

  test('debe retornar el estado por defecto', () => {    
    
    const state = authReducer( initState, {});
    expect( state ).toEqual( initState );
  })

  test('debe autenticar el usuario', () => {
    
    const action = {
      type: types.authLogin,
      payload: {
        uid: '123',
        name: 'Eze'
      }
    }

    const state = authReducer( initState, action );

    expect( state ).toEqual({ 
      "checking": false,
       "name": "Eze",
       "uid": "123"
      })

  })
  
  
})