import React from 'react';
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../components/03-ejemplos/MultipleCustomHooks';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
jest.mock('../../hooks/useFetch');
jest.mock('../../hooks/useCounter');



describe('Pruebas en <MultipleCustomHooks /> ', () => {

  useCounter.mockReturnValue({
    counter: 10,
    increment: () => {}
  })
 
  test('debe mostrarse correctamente', () => {

    useFetch.mockReturnValue({
      data: null,
      loading: false,
      error: null
    });

    const wrapper = shallow(<MultipleCustomHooks />);
    expect( wrapper ).toMatchSnapshot();


  })

  test('debe mostrar la informacion', () => {
    useFetch.mockReturnValue({
      data: [{
        author: 'Ezequiel',
        quote: 'Hola Mundo'
      }],
      loading: false,
      error: null
    });
    const wrapper = shallow(<MultipleCustomHooks />);

    expect( wrapper.find('.alert').exists() ).toBe(false);
    expect( wrapper.find('footer').text().trim() ).toBe("Ezequiel")
    expect( wrapper.find('.mb-0').text().trim() ).toBe("Hola Mundo")

    
  })


})