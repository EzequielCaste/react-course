import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const { 
  REACT_APP_API_KEY, 
  REACT_APP_AUTH_DOMAIN,
  REACT_APP_DATABASE_URL,
  REACT_APP_PROJECT_ID,
  REACT_APP_STORAGE_BUCKET,
  REACT_APP_MESSAGING_SENDER_ID,
  REACT_APP_APP_ID,
  REACT_APP_MEASUREMENT_ID,
 } = process.env;

const firebaseConfig = {
  apiKey: REACT_APP_API_KEY,
  authDomain: REACT_APP_AUTH_DOMAIN,
  databaseURL: REACT_APP_DATABASE_URL,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: REACT_APP_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
  appId: REACT_APP_APP_ID,
  measurementId: REACT_APP_MEASUREMENT_ID || ''
};

// const firebaseConfigTesting = {
//   apiKey: "AIzaSyCa-XeZTMAXjGy0Dbl6PFi4VbSJstFhLSU",
//   authDomain: "tests-76263.firebaseapp.com",
//   databaseURL: "https://tests-76263.firebaseio.com",
//   projectId: "tests-76263",
//   storageBucket: "tests-76263.appspot.com",
//   messagingSenderId: "491360047728",
//   appId: "1:491360047728:web:42d66d9d2a49439ce01ab5"
// };

// if ( process.env.NODE_ENV === "test" ) {
//   //testing 
//   firebase.initializeApp(firebaseConfigTesting);
// } else {
//   // dev/prod
//   firebase.initializeApp(firebaseConfig);
// }

firebase.initializeApp(firebaseConfig);
 const db = firebase.firestore();
 const googleAuthProvider = new firebase.auth.GoogleAuthProvider()


 export {
   db,
   googleAuthProvider,
   firebase 
 }
