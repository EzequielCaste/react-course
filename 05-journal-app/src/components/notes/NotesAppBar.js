import React from 'react'
import moment from 'moment'
import { useSelector } from 'react-redux'

export const NotesAppBar = () => {

  const { date } = useSelector( state => state.notes.active );



  return (
    <div className="notes__appbar">
      <span>{ moment(date).format('MMMM Do YYYY') }</span>

      <div>
        <button className="btn">
          Picture
        </button>
        <button className="btn">
          Save
        </button>
      </div>
    </div>
  )
}
