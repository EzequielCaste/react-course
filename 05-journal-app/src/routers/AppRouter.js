import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch, Redirect, 
  Route
} from "react-router-dom";
import { firebase } from '../firebase/firebase-config';


import { AuthRouter } from "./AuthRouter";
import { JournalScreen } from "../components/journal/JournalScreen";
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";

export const AppRouter = () => {

  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {   

    firebase.auth().onAuthStateChanged( (user) => {
      
      if( user?.uid ) {
        dispatch( login(user.uid, user.displayName ) );
        setIsLoggedIn( true );
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
          <Route
            path="/auth"
            component={ AuthRouter }
          />

          <Route 
            exact 
            path="/" 
            component={ JournalScreen } 
          />

          <Redirect to="/auth/login" />

        </Switch>
      </div>
    </Router>
  )
}
