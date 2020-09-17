import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";



import { PublicRoute } from "./PublicRoutes";
import { PrivateRoute } from "./PrivateRoutes";
import { LoginScreen } from "../components/auth/LoginScreen";
import { CalendarScreen } from "../components/calendar/CalendarScreen";
import { startChecking } from "../actions/auth";

export const AppRouter = () => {

  const dispatch = useDispatch();

  const { checking, uid } = useSelector( state => state.auth );

   useEffect(() => {

    dispatch( startChecking() );

  }, [dispatch]);


  if ( checking ) {
    return <h5>Wait...</h5>
  }

  return (
    <Router>
      <div>
        <Switch>
          <PrivateRoute 
            exact
            path="/" 
            component={CalendarScreen}  
            isLoggedIn={ !!uid  }
          />

          <PublicRoute
            exact
            path="/login"
            component={LoginScreen} 
            isLoggedIn={ !!uid }
          />
        </Switch>
      </div>
    </Router>
  )
}
