import React, { Component } from 'react';
import { Button, Nav, Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import BlankHeader from './BlankHeader';

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
                <BlankHeader/>
                <br/><br/>
                <center>
                <Card border="secondary" style={{ height: '20rem', width: '26rem'}}>
                    <br></br>
                    {this.checkForUser()}
                    <Card.Title as='h2'>Welcome to Money Tracker$</Card.Title>
                    <Card.Body>
                    <LinkContainer to="/login">
                    <Button variant="outline-primary">Login</Button>
                    </LinkContainer><br/><br/>


                    
                    <LinkContainer to="/signup">
                    <Button variant="outline-info">Signup</Button>
                    </LinkContainer>

                    {/* <a href="/signup">SignUp</a><br/><br/>
                    <a href="/login">Login</a> */}
                    </Card.Body>
                </Card>
                </center>
            </div>
        );
    }
}

export default LoginPage;