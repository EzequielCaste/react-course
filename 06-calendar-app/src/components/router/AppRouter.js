import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { CalendarScreen } from "../calendar/CalendarScreen";
import { LoginScreen } from "../auth/LoginScreen";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={CalendarScreen} />
          <Route exact path="/login" component={LoginScreen} />
        </Switch>
      </div>
    </Router>
  )
}
