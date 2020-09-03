import { db } from "../firebase/firebase-config";
import { types } from "../types/types";
import { loadNotes } from "../helpers/loadNotes";


// asyncrona lleva return y el callback
export const startNewNote = () => {
  return async ( dispatch, getState ) => {

    const uid = getState().auth.uid;  

    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime()
    }

    const docRef = await db.collection(`${uid}/journal/notes`).add( newNote );

    dispatch( activeNote( docRef.id, newNote ) );
  }
}

export const activeNote = ( id, note ) => {
 
  console.log(id, note);

  return { 
    type: types.notesActive,
    payload: {
      id,
      ...note
    }
  }
}  

export const startLoadingNotes = ( uid ) => {
  return async( dispatch ) => {

    const notes = await loadNotes( uid );
    dispatch( setNotes(notes) )
  }
}

export const setNotes = ( notes ) => ({
  type: types.notesLoad,
  payload: notes
});

export const startSaveNote = ( note ) => {
  return async( dispatch, getState) => {

    const uid = getState().auth.uid;  

    const noteToFirestore = { ...note };
    delete noteToFirestore.id;

    await db.doc(`${ uid }/journal/notes/${ note.id }`).update( noteToFirestore )


  }
}