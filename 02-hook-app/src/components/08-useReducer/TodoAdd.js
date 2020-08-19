import React from 'react'
import { useForm } from '../../hooks/useForm'

export const TodoAdd = ({ handleAddTodo }) => {

  const [ { description }, handleInputChange, reset ] = useForm({
    description: ''
  }); 

  const handleSubmit = (e) => {
    e.preventDefault();

    if ( description.trim().length <= 1 ) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false
    };
  
    handleAddTodo( newTodo );
    reset();
  }

  return (
    <>
      <h4>Agregar Tarea</h4>
      <hr/>

      <form onSubmit={ handleSubmit }>
        <input 
          value={ description }
          onChange={ handleInputChange }
          type="text"
          name="description"
          placeholder="Tarea..."
          autoComplete="false"
        />
        <button
          type="submit"
          className="btn btn-outline-primary mt-1 btn-block">
          Agregar
        </button>
      </form>        
    </>
  )
}
