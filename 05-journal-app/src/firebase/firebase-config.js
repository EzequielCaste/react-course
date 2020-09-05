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

const firebaseConfigTesting = {
  apiKey: "AIzaSyCa-XeZTMAXjGy0Dbl6PFi4VbSJstFhLSU",
  authDomain: "tests-76263.firebaseapp.com",
  databaseURL: "https://tests-76263.firebaseio.com",
  projectId: "tests-76263",
  storageBucket: "tests-76263.appspot.com",
  messagingSenderId: "491360047728",
  appId: "1:491360047728:web:42d66d9d2a49439ce01ab5"
};

if ( process.env.NODE_ENV === "test" ) {
  //testing 
  firebase.initializeApp(firebaseConfigTesting);
} else {
  // dev/prod
  firebase.initializeApp(firebaseConfig);
}

 const db = firebase.firestore();
 const googleAuthProvider = new firebase.auth.GoogleAuthProvider()


 export {
   db,
   googleAuthProvider,
   firebase 
 }
