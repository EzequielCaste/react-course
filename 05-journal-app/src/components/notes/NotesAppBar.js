import React from 'react'
import moment from 'moment'
import { useSelector, useDispatch } from 'react-redux'
import { startSaveNote } from '../../actions/notes';

export const NotesAppBar = () => {

  const { date } = useSelector( state => state.notes.active );
  const dispatch = useDispatch();
  const { active } = useSelector( state => state.notes );

  const handleSave = () => {
   dispatch( startSaveNote( active ) );

  }

  return (
    <div className="notes__appbar">
      <span>{ moment(date).format('MMMM Do YYYY') }</span>

      <div>
        <button className="btn">
          Picture
        </button>
        <button 
          className="btn"
          onClick={ handleSave }
        >
          Save
        </button>
      </div>
    </div>
  )
}
