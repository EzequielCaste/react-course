import React, { useEffect, useRef } from 'react'
import { NotesAppBar } from './NotesAppBar'
import { useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm';

export const NoteScreen = () => {

  const { active: note } = useSelector( state => state.notes );
  const [ formValues, handleInputChange, reset ] = useForm( note );
  const { body, title } = formValues;

  const activeID = useRef( note.id );
  
  useEffect(() => {
    if ( note.id !== activeID.current ) {
      reset( note );
      activeID.current = note.id;
    }
  }, [note, reset]);

  return (
    <div className="notes__main-content">
      
      <NotesAppBar />

      <div className="notes__content">
        <input 
          onChange={ handleInputChange }
          autoComplete="off"
          type="text"
          className="notes__title-input"
          placeholder={ title }
        />

        <textarea           
          placeholder={ body }
          className="notes__textarea"
          onChange={ handleInputChange }
        ></textarea>

      
      {
        (note.url) 
        && (
          <div className="notes__image">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Gloomy_Forest.jpg/275px-Gloomy_Forest.jpg"
              alt="bosque"
            />
          </div>
        )   
      }

      </div>

    </div>
  )
}
