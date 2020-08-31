import React from 'react'
import { Sidebar } from './Sidebar'
import { NoteScreen } from '../notes/NoteScreen'
// import { NoSelection } from './NoSelection'

export const JournalScreen = () => {
  return (
    <div className="journal__main-content">
      <Sidebar />

      <main>

        {/* <NoSelection /> */}
        <NoteScreen />
      </main>


  </div>
  )
}
