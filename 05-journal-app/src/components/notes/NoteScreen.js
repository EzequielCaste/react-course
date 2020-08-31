import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      
      <NotesAppBar />

      <div className="notes__content">
        <input 
          autoComplete="off"
          type="text"
          className="notes__title-input"
          placeholder="Some text"
        />

        <textarea           
          placeholder="What happend today"
          className="notes__textarea"
        ></textarea>

      

      <div className="notes__image">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Gloomy_Forest.jpg/275px-Gloomy_Forest.jpg"
          alt="bosque"
        />

      </div>

      </div>

    </div>
  )
}
