import React from 'react';
import { mount } from 'enzyme'
import '@testing-library/jest-dom'
import { LoginScreen } from '../../../components/login/LoginScreen';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../../auth/AuthContext';
import { types } from '../../../types/types';

describe('Pruebas en <LoginScreen />', () => {
  
  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: false
    }
  }

  const history = {    
    replace: jest.fn()
  }

  const wrapper = mount(
    <AuthContext.Provider value={ contextValue }>
      
        <LoginScreen history={ history } />
   
    </AuthContext.Provider>  
  );

  test('debe mostrarse correctamente', () => {
    expect( wrapper ).toMatchSnapshot();
  });

  test('debe realizar el dispatch y la navegación', () => {
    //context
    wrapper.find('button').prop('onClick')();

    expect( contextValue.dispatch ).toHaveBeenCalledTimes(1);
    expect( contextValue.dispatch ).toHaveBeenCalledWith({
      type: types.login,
      payload: {     
        name: "Ezequiel"
      }
    });

    expect( history.replace ).toHaveBeenCalledTimes(1);

    
  })
})