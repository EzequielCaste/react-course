import React, { useReducer, useEffect } from 'react'
import { todoReducer } from './todoReducer';


import './styles.css'
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

const init = () => {
  
  return JSON.parse(localStorage.getItem('todos')) || [];
 
}

export const TodoApp = () => {

  const [ todos, dispatch ] = useReducer(todoReducer, [], init); 

  useEffect( () => {
    localStorage.setItem('todos', JSON.stringify( todos ))
  }, [todos]);

  const handleDelete = ( todoId ) => {    
    const action = {
      type: 'delete',
      payload: todoId
    }
    dispatch( action )
  }

  const handleToggle = (todoId) => {    
    dispatch({
      type: 'toggle',
      payload: todoId
    })
  }

  const handleAddTodo = ( newTodo ) => {
    dispatch({
      type: 'add',
      payload: newTodo
    });
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // }
  return (
    <div>
      <h1>TodoApp ( {todos.length} )</h1>
      <hr/>
      <div className="row">
        <div className="col-7">
        {/* { TodoList, todos handletoggle handle delete } */}
        <TodoList 
          todos={ todos } 
          handleToggle={ handleToggle }
          handleDelete={ handleDelete }
        />
        </div>
        <div className="col-5">
            <TodoAdd 
              handleAddTodo={ handleAddTodo }
             />

        </div>
      </div>
    </div>
  )
}
