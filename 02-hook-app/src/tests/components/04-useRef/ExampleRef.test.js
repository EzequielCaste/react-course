import React from 'react'
import { shallow } from 'enzyme'
import { ExampleRef } from '../../../components/04-useRef/ExampleRef';

describe('Pruebas en <ExampleRef />', () => {

  const wrapper = shallow( <ExampleRef />);

  test('debe mostrar el componente', () => {    
    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find('MultipleCustomHooks').exists()).toBe(false);
  });
  
  test('debe mostrar el componente <MultipleCustomHooks />', () => {
    
    wrapper.find('button').simulate('click');
    expect( wrapper.find('MultipleCustomHooks').exists()).toBe(true);

  })
})