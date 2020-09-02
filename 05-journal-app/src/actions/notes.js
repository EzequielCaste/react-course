import { db } from "../firebase/firebase-config";


// asyncrona lleva return y el callback
export const startNewNote = () => {
  return async ( dispatch, getState ) => {

    const uid = getState().auth.uid;

    console.log(uid);

    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime()
    }

    const docRef = await db.collection(`${uid}/journal/notes`).add( newNote );

    console.log(docRef);


  }
}