import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch, Redirect
} from "react-router-dom";
import { firebase } from '../firebase/firebase-config';


import { AuthRouter } from "./AuthRouter";
import { JournalScreen } from "../components/journal/JournalScreen";
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";
import { PublicRoute } from "./PublicRoutes";
import { PrivateRoute } from "./PrivateRoutes";
import { loadNotes } from "../helpers/loadNotes";
import { setNotes } from "../actions/notes";

export const AppRouter = () => {

  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {   

    firebase.auth().onAuthStateChanged( async(user) => {
      
      if( user?.uid ) {
        dispatch( login(user.uid, user.displayName ) );
        setIsLoggedIn( true );

        const notes = await loadNotes( user.uid );

        dispatch( setNotes(notes) )

      } else {
        setIsLoggedIn( false );
      }

      setChecking(false);

    });

  }, [dispatch, setChecking, setIsLoggedIn])

  if ( checking ) {
    return (
      <h1>Loading...</h1>
    )
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            path="/auth"
            component={ AuthRouter }
            isLoggedIn={ isLoggedIn }
          />

           <PrivateRoute
            exact 
            path="/" 
            component={ JournalScreen } 
            isLoggedIn={ isLoggedIn }
          />

          <Redirect to="/auth/login" />

        </Switch>
      </div>
    </Router>
  )
}
