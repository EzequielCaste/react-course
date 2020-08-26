import React from 'react'
import { mount } from 'enzyme'
import { DashboardRoutes } from '../../routers/DashboardRoutes'
import '@testing-library/jest-dom'
import { AuthContext } from '../../auth/AuthContext'
import { MemoryRouter } from 'react-router-dom'

describe('Pruebas en <DashboardRoutes />', () => {

  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: true,
      name: "Ezequiel"
    }
  }

  test('debe mostrarse correctamente', () => {

    const wrapper = mount(
    <AuthContext.Provider value={ contextValue }>
      <MemoryRouter>
        <DashboardRoutes />
      </MemoryRouter>
    </AuthContext.Provider>);

    
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('span').text().trim()).toBe("Ezequiel");
  })
})