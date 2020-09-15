import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { CalendarScreen } from "../calendar/CalendarScreen";
import { LoginScreen } from "../auth/LoginScreen";
import { startChecking } from "../../actions/auth";
import { PublicRoute } from "./PublicRoutes";
import { PrivateRoute } from "./PrivateRoutes";

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
