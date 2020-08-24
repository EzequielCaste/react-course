import React from 'react'
import { mount } from 'enzyme';
import '@testing-library/jest-dom'
import { AppRouter } from '../../../components/09-useContext/AppRouter';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en <AppRouter />', () => {

  const user = {
    id: 1,
    name: 'Eze'
  }
  const wrapper = mount(
  <UserContext.Provider value={{
    user
  }}>
     <AppRouter />);
  </UserContext.Provider>);

  test('debe mostrarse correctamente', () => {

    expect( wrapper ).toMatchSnapshot();

  })

})
