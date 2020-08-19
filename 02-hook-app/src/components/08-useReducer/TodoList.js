import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({ todos, handleDelete, handleToggle }) => {
  return (
    <ul className="list-group list-group-flush">
      {
        todos.map( (todo, i) => (
          // TodoListItem todo indice handlers
          <TodoListItem 
            todo={todo} 
            key={todo.id}
            index={i}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
          
          )
        )
      }
    </ul>
  )
}
