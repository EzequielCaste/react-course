import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route  
} from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/about" component={ AboutScreen } />
          <Route path="/login" component={ LoginScreen } />
          <Route path="/" component={ HomeScreen } />
        </Switch>
      </div>      
    </Router>
  )
}
