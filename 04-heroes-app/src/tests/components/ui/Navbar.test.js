import React from 'react';
import { mount } from 'enzyme'
import '@testing-library/jest-dom'
import { Navbar } from '../../../components/ui/Navbar';
import { AuthContext } from '../../../auth/AuthContext';
import { MemoryRouter, Router } from 'react-router-dom';
import { types } from '../../../types/types';

describe('Pruebas en <Navbar />', () => {
  
  const historyMock = {
    push: jest.fn(),
    createHref: jest.fn(),
    listen: jest.fn(),
    replace: jest.fn(),
    location: {}
  }

  const contextValue = {
    dispatch: jest.fn(),
    user: {
      name: "Ezequiel",
      logged: true
    }
  }

  afterEach( () => {
    jest.clearAllMocks();
  })

  const wrapper = mount(
    <AuthContext.Provider value={contextValue} >
      <MemoryRouter>
        <Router history={ historyMock }>
          <Navbar />);
        </Router>
      </MemoryRouter>

    </AuthContext.Provider>);

    

  test('debe mostrarse correctamente', () => {
    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find('span').text().trim() ).toBe("Ezequiel")
  });

  test('debe llamar logout con dispatch y usar el history', () => {

    wrapper.find('button').prop('onClick')();

    expect( contextValue.dispatch ).toHaveBeenCalledWith({
      type: types.logout
    })

    expect( historyMock.replace ).toHaveBeenCalledWith('/login')

  })
  
})