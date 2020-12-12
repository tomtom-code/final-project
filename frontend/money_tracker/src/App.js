import React, { Component } from 'react';

import './App.css';
import LoginPage from './components/LoginPage'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'

// import UserUpdateForm from './components/UserUpdateForm'
import MainPage from './components/MainPage'
import UpdateInfo from './components/UpdateInfo'

import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";

class App extends Component {

  state ={
    currentUser: null
  }

  //this will remain log in even though you refresh the web page, (keep your token)
  componentDidMount(){
    console.log(this.state.currentUser)
    if(localStorage.token){
      fetch("http://localhost:3000/api/v1/user",{
        headers: {
          "Authorization": `Bearer ${localStorage.token}`
        }
      })
      .then(res => res.json())
      .then(user => this.setState({currentUser: user}))

    }
  }

  handleLogin = (user) => {
    this.setState({
      currentUser: user
    }) 
  }


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
              user ={this.state.currentUser}
              {...routeProps}/>
              } 
            />

            <Route 
              exact 
              path='/login'
              render={routeProps =>
              <LoginForm
              user ={this.state.currentUser}
              handleLogin={this.handleLogin} 
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
              user={this.state.currentUser}
              handleLogin={this.handleLogin}
              {...routeProps}/>
              }
            />

            <Route
              exact
              path='/UpdateInfo'
              render={routeProps =>
              <UpdateInfo
              user={this.state.currentUser}
              handleLogin={this.handleLogin}
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
