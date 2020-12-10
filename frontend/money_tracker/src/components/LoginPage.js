import React, { Component } from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom";





class LoginPage extends Component {

    //if current user  has not logout, it will redirect to MainPage
    checkForUser =()=>{
        console.log(this.props.user)
        if(this.props.user){
            this.props.history.push("/MainPage")
        }
    }



    render() {
        return (
            <div>
                {this.checkForUser()}
                <h1>Welcome to Money Tracker$</h1><br/>

                <Link to="/login">Login</Link><br/><br/>
                <Link to="/signup">SignUp</Link>

                {/* <a href="/signup">SignUp</a><br/><br/>
                <a href="/login">Login</a> */}
            </div>
        );
    }
}

export default LoginPage;