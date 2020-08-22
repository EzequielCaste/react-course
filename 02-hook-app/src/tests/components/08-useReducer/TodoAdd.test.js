import React from 'react'
import { shallow } from 'enzyme'
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';
import '@testing-library/jest-dom'

describe('Pruebas en <TodoAdd />', () => {

  const handleAddTodo = jest.fn();

  const wrapper = shallow( 
  <TodoAdd 
    handleAddTodo={ handleAddTodo }
  />);

  test('debe mostrarse correctamente', () => {
    expect( wrapper ).toMatchSnapshot();
  });

  test('NO debe llamar HandleAddTodo', () => {

    const formSubmit = wrapper.find('form').prop('onSubmit');

    formSubmit({ preventDefault(){} });

    expect( handleAddTodo ).toHaveBeenCalledTimes(0);
  });

  test('debe llamar la función HandleAddTodo', () => {
    // con un argumento // called
    // simular manipulacion en el input
    const value = 'Aprender React';

    wrapper.find('input').simulate('change', {
      target: {
        name: 'description',
        value
      }
    });

   const formSubmit = wrapper.find('form').prop('onSubmit');
   formSubmit({ preventDefault(){} });

   expect( handleAddTodo ).toHaveBeenCalledTimes(1);
   expect( handleAddTodo ).toHaveBeenCalledWith( expect.any(Object) );
   expect( handleAddTodo ).toHaveBeenCalledWith( {
     id: expect.any(Number),
     desc: value,
     done: false
   } );

   expect( wrapper.find('input').prop('value')).toBe('');

  });
})