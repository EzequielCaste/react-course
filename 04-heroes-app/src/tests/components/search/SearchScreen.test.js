import React from 'react';
import { mount } from 'enzyme'
import '@testing-library/jest-dom';
import { MemoryRouter, Route } from 'react-router-dom';
import { SearchScreen } from '../../../components/search/SearchScreen';

describe('Pruebas en <SearchScreen />', () => {

  test('debe mostrarse correctamente con valores por defecto', () => {

    const wrapper = mount(
      <MemoryRouter initialEntries={['/search']}>
        <Route 
          path="/search" 
          component={ SearchScreen }
        />        
      </MemoryRouter>
    )

    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find('.alert-info').text().trim()).toBe('Search a Hero')

  })

  test('debe mostrar a Batman y el input con el valor del query string', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=Batman']}>
        <Route 
          path="/search" 
          component={ SearchScreen }
        />        
      </MemoryRouter>
    )

    expect( wrapper.find('input').prop('value') ).toBe('Batman')

    expect( wrapper ).toMatchSnapshot();

  })

  test('debe mostrar un error si no se encuentra el heroe', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=Bat123']}>
        <Route 
          path="/search" 
          component={ SearchScreen }
        />        
      </MemoryRouter>
    )

    expect( wrapper.find('.alert-danger').text().trim() ).toBe('No Hero matches your search Bat123')
    
  })

  test('debe llamar al PUSH del history', () => {
    const history = {
      push: jest.fn()
    }

    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=Bat123']}>
        <Route 
          path="/search" 
          component={ () => <SearchScreen history={ history } /> }
        />        
      </MemoryRouter>
    )


    wrapper.find('input').simulate('change', {
      target: {
        name: 'query',
        value: 'batman'
      }
    });

    wrapper.find('form').prop('onSubmit')({
      preventDefault(){}
    });

    expect( history.push ).toHaveBeenLastCalledWith(`?q=batman`)



  })
  
})