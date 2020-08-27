import React from 'react';
import { mount } from 'enzyme';
import { HeroScreen } from '../../../components/heroes/HeroScreen';
import { MemoryRouter, Route } from 'react-router-dom';


describe('Pruebas en <HeroScreen />', () => {


  const history = {
    length: 10,
    push: jest.fn(),
    goBack: jest.fn()
  }
  
  
  
  test('debe mostrar el componente Redirect si no hay argumentos en el URL', () => {
      const wrapper = mount(
      <MemoryRouter initialEntries={ ['/hero'] }>
        <HeroScreen history={ history } />
      </MemoryRouter>
      );

    expect(wrapper.find('Redirect').exists()).toBe(true);
  })

  test('debe mostrar un hero si el parámetro existe y se encuentra', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={ ['/hero/marvel-hulk'] }>
        <Route path='/hero/:heroId' component={ HeroScreen } />
      </MemoryRouter>
      );

      expect( wrapper.find('.row').exists() ).toBe(true);
  });

  test('debe regresar a la pantalla anterior con PUSH', () => {

    const history = {
      length: 1,
      push: jest.fn(),
      goBack: jest.fn()
    }

    const wrapper = mount(
      <MemoryRouter initialEntries={ ['/hero/marvel-hulk'] }>
          <Route 
            path='/hero/:heroId' 
            component={ (props) => <HeroScreen history={history} /> } 
            
          />
      </MemoryRouter>
    );

    wrapper.find('button').prop('onClick')();

    
    expect( history.push ).toHaveBeenCalledWith('/');
    expect( history.goBack ).not.toHaveBeenCalledWith();

  })

  test('debe regresar a la pantalla anterior GOBACK', () => {

    const wrapper = mount(
      <MemoryRouter initialEntries={ ['/hero/marvel-hulk'] }>
          <Route 
            path='/hero/:heroId' 
            component={ (props) => <HeroScreen history={history} /> } 
            
          />
      </MemoryRouter>
    );

    wrapper.find('button').prop('onClick')();

    
    expect( history.goBack ).toHaveBeenCalledWith();
    expect( history.push ).toHaveBeenCalledTimes(0);

  })

  test('debe llamar el redirect si el hero no existe', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={ ['/hero/marvel-hulk1231321'] }>
          <Route 
            path='/hero/:heroId' 
            component={ (props) => <HeroScreen history={history} /> } 
            
          />
      </MemoryRouter>
    );

   expect( wrapper.text() ).toBe('');

  })



})


    
  
