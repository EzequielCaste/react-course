import React from 'react';
import { shallow } from 'enzyme'
import '@testing-library/jest-dom'
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import { demoTodos } from '../../fixtures/demoTodos';


// { todo, index: i, handleDelete, handleToggle }

describe('Pruebas en <TodoListItem />', () => {

  const handleDelete = jest.fn();
  const handleToggle = jest.fn();

  const wrapper = shallow(<TodoListItem 
      todo={ demoTodos[0] } 
      index={ 0 }     
      handleDelete= { handleDelete }
      handleToggle= { handleToggle }
     /> 
  );

  test('debe mostrarse correctamente', () => {
    expect( wrapper ).toMatchSnapshot();
  });
  
  test('debe llamar la función handleDelete', () => {     
    wrapper.find('button').simulate('click');
    expect( handleDelete ).toHaveBeenCalledWith( demoTodos[0].id );    
  });

  test('debe llamar la función handleToggle', () => {
    wrapper.find('p').simulate('click');
    expect( handleToggle ).toHaveBeenCalledWith( demoTodos[0].id );   
  });

  test('debe mostrar el texto correctamente', () => {   
    const index = 1;
    const desc = demoTodos[0].desc;
    expect( wrapper.find('p').text() ).toBe(`${index} ${desc}`);
  });

  test('debe tener la clase complete si el todo.done es true', () => {   

    const todo = demoTodos[0];
    todo.done = true;

    const wrapper = shallow(<TodoListItem 
      todo={ todo } 
     />);

     expect( wrapper.find('p').hasClass('complete')).toBe(true)

    


  });

})