import React from 'react'
import { todoReducer } from '../../../components/08-useReducer/todoReducer'
import { demoTodos } from '../../fixtures/demoTodos'



describe('Pruebas en todoReducer', () => {

  test('debe retornar el estado por defecto', () => {

    const state = todoReducer( demoTodos, {} );

    expect( state ).toEqual( demoTodos )
  });

  test('debe agregar un todo', () => {

    const newTodo = {
      id: 3,
      desc: 'Learn Node',
      done: false
    };

    const action = {
      type: 'add',
      payload: newTodo
    };

    const state = todoReducer( demoTodos, action );

    expect( state.length ).toBe( 3 );
    expect( state ).toEqual([...demoTodos, newTodo])
  });

  test('debe eliminar un todo', () => {

    const action = {
      type: 'delete',
      payload: 2
    };

    const state = todoReducer( demoTodos, action );

    expect( state.length ).toBe( 1 );
    expect( state ).toEqual( [ demoTodos[0] ])
  });

  test('debe hacer el toggle del todo', () => {
    
    const action = {
      type: 'toggle',
      payload: 1
    };

    const state = todoReducer( demoTodos, action );
  
    expect( state[0].done ).toBe( true );
    expect( state[1] ).toEqual(demoTodos[1])
  })
})