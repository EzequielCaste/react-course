import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAhHBXSOeUM7adgK6LYKfmCw9EX_NAzVzI",
  authDomain: "react-journal-b0672.firebaseapp.com",
  databaseURL: "https://react-journal-b0672.firebaseio.com",
  projectId: "react-journal-b0672",
  storageBucket: "react-journal-b0672.appspot.com",
  messagingSenderId: "290199519539",
  appId: "1:290199519539:web:f209d9e6d7b22e11f57e46",
  measurementId: "G-CVY2QFDY9N"
};

firebase.initializeApp(firebaseConfig);

 const db = firebase.firestore();
 const googleAuthProvider = new firebase.auth.GoogleAuthProvider()


 export {
   db,
   googleAuthProvider,
   firebase 
 }
