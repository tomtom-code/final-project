import React, { Component } from 'react';

import './App.css';
import LoginPage from './components/LoginPage'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
// import UserUpdateForm from './components/UserUpdateForm'
import MainPage from './components/MainPage'

import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";

class App extends Component {

  render() {
    return(
      <div>
        <BrowserRouter>
          <Switch>
            
            <Route
              exact 
              path='/'
              render={routeProps =>
              <LoginPage 
              {...routeProps}/>
              } 
            />

            <Route 
              exact 
              path='/login'
              render={routeProps =>
              <LoginForm 
              {...routeProps}/>
              } 
            />

            <Route 
              exact 
              path='/signup'
              render={routeProps =>
              <SignupForm 
              {...routeProps}/>
              } 
            /> 

            <Route
              exact
              path='/MainPage'
              render={routeProps =>
              <MainPage
              {...routeProps}/>
              }
            />

            
             



          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
 

export default App;
