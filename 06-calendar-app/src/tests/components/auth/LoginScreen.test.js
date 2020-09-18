import React from 'react';
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import '@testing-library/jest-dom';
import { LoginScreen } from '../../../components/auth/LoginScreen';
import { startLogin, startRegister } from '../../../actions/auth';
import Swal from 'sweetalert2';


jest.mock('sweetalert2', () => ({
  fire: jest.fn()
})
)

jest.mock('../../../actions/auth', () => ({
  startLogin: jest.fn(),
  startRegister: jest.fn() 
})
);

const middlewares = [ thunk ];
const mockStore = configureStore(middlewares);

const initState = {};
const store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
  <Provider store={ store } >
    <LoginScreen />
  </Provider>
)

describe('Pruebas en <LoginScreen />', () => {

  beforeEach( () => {
    jest.clearAllMocks();
  })

  test('debe mostrarse correctamente', () => {
    expect( wrapper ).toMatchSnapshot();
  })

  test('debe llamar el dispatch del login', () => {
    
    wrapper.find('input[name="lEmail"]').simulate('change', {
      target: {
        name: 'lEmail',
        value: 'pedro@gmail.com'
      }
    })

    wrapper.find('input[name="lPassword"]').simulate('change', {
      target: {
        name: 'lPassword',
        value: '123456'
      }
    })

    wrapper.find('form').at(0).prop('onSubmit')({
      preventDefault(){}
    });

    expect( startLogin ).toHaveBeenCalledWith('pedro@gmail.com','123456');

  })

  test('no hay registro si las contraseñas son diferentes', () => {
    
    wrapper.find('input[name="rPassword2"]').simulate('change', {
      target: {
        name: 'rPassword2',
        value: '123'
      }
    });

    wrapper.find('form').at(1).prop('onSubmit')({
      preventDefault(){}
    });

    expect( startRegister ).not.toHaveBeenCalled();

    expect( Swal.fire ).toHaveBeenCalledWith("Error", "Las contraseñas debe ser iguales", "error")

  })

  test('Registro con contraseñas iguales', () => {
    wrapper.find('input[name="rPassword2"]').simulate('change', {
      target: {
        name: 'rPassword2',
        value: '123456'
      }
    });

    wrapper.find('form').at(1).prop('onSubmit')({
      preventDefault(){}
    });

    expect( startRegister ).toHaveBeenCalledWith("eze@gmail.com", "123456", "Ezequiel123");

    expect( Swal.fire ).not.toHaveBeenCalled();
  })
  
  
  
  
})