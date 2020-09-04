import React, { useEffect, useRef } from 'react'
import { NotesAppBar } from './NotesAppBar'
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from '../../hooks/useForm';
import { activeNote, startDeleting } from '../../actions/notes';

export const NoteScreen = () => {

  const dispatch = useDispatch();

  const { active: note } = useSelector( state => state.notes );
  const [ formValues, handleInputChange, reset ] = useForm( note );
  const { body, title, id } = formValues;

  const activeID = useRef( note.id );
  
  useEffect(() => {
    if ( note.id !== activeID.current ) {
      reset( note );
      activeID.current = note.id;
    }
  }, [note, reset]);

  useEffect(() => {
    dispatch( activeNote( formValues.id, { ...formValues }) );
  }, [formValues, dispatch])


  const handleDelete = () => {
    dispatch( startDeleting( id ) );
  }


  return (
    <div className="notes__main-content">
      
      <NotesAppBar />

      <div className="notes__content">
        <input 
          onChange={ handleInputChange }
          autoComplete="off"
          type="text"
          name="title"
          className="notes__title-input"
          value={ title }
          placeholder="Note title"
        />

        <textarea           
          value={ body }
          name="body"
          className="notes__textarea"
          onChange={ handleInputChange }
          placeholder="Note body"
        ></textarea>

      
      {
        (note.url) 
        && (
          <div className="notes__image">
            <img 
              src={ note.url }
              alt="bosque"
            />
          </div>
        )   
      }

      </div>

      <button 
        className="btn btn-danger"
        onClick={ handleDelete }
      >
        Delete
      </button>

    </div>
  )
}
