import React from 'react';
import '@testing-library/jest-dom'
import { AddCategory } from '../../components/AddCategory'
import { shallow } from 'enzyme'

describe("Pruebas en <AddCategory />", () => {

  const setCategories = jest.fn();

  let wrapper = shallow(<AddCategory setCategories={ setCategories } />)

  beforeEach( () => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={ setCategories } />)
  })


  test("debe mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe cambiar el cuadro de texto", () => {
    const input = wrapper.find('input');
    const value = "Hola Mundo"

    input.simulate('change', { target: { value } })

    expect( wrapper.find('p').text().trim() ).toBe( value )
  })

  test("NO debe postear la información con submit", () => {
    wrapper.find('form').simulate('submit', {
      preventDefault(){} 
    })
    expect( setCategories ).not.toHaveBeenCalled();

  })

  test("debe llamar el setCategories y limpiar el cuadro de texto", () => {

    const input = wrapper.find('input');
    const value = "Hola Pibe";   

    input.simulate('change', { target: { value } });
    wrapper.find('form').simulate('submit', { preventDefault(){} })

    //expect( setCategories ).toHaveBeenCalled();
    expect( setCategories ).toHaveBeenCalledWith( expect.any(Function))
    expect( input.prop('value') ).toBe( '' )
    
  })
})