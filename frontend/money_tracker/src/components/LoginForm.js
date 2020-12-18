import React, { Component } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import {Link} from "react-router-dom";
import BlankHeader from './BlankHeader'


class LoginForm extends Component {
    constructor(){
        super()
        this.state = {
            name: "",
            password: "",
            
        }
    }

    componentDidMount(){
        if(this.props.user){
            this.props.history.push("/MainPage")
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target
        
        this.setState({
            [name]: value
        })
    };


    login = (event) => {
        event.preventDefault()
        event.target.reset()

        const {name, password} = this.state

        const user = {name, password}

        fetch("http://localhost:3000/api/v1/login", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({user})
        })
        .then(r => r.json())
        .then(response => {
            // The token below will be used as a header for Authorization in your fetches
            // If you look in application controller we are requesting the header Authorization
            // Once it is recieved the token is decrypted and access to data is granted
            localStorage.setItem("token", response.jwt)
            console.log(response)
            this.props.handleLogin(response.user)
            this.props.history.push('/MainPage')
        })
    }

    greeting = () => {
        if(this.state.loggedIn){
            return <h3>Hello {this.state.currentUser}</h3>
        }else{
            return <h3>Please Log In</h3>
        }
    }


    render() {
        
        return (
            
            <div>
                <BlankHeader />
                <br/><br/>
                <center>
                <Card border="secondary" style={{width: '20rem'}}>
                <br/><br/>
                <Card.Title as='h3'>{this.greeting()}</Card.Title>
                <Card.Body>

                <Form onSubmit={this.login}>

                    <Form.Group controlId="formBasicName">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Name" onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" onChange={this.handleChange} />
                    </Form.Group>


                    <Button variant='primary' type="submit">Submit</Button>
                </Form>
                <br/>
                    <Link to="/"> Home Page</Link>
                </Card.Body>
                </Card>
                </center>
            </div>
        );
    }
}

export default LoginForm;