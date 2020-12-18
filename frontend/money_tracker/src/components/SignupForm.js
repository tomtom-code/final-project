import React, { Component } from 'react';
import {Redirect, Link} from "react-router-dom";
import { Card, Form, Button } from 'react-bootstrap';
import BlankHeader from './BlankHeader';

class SignupForm extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            password: "",
            email: "",
            created: false
        }
    }


    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({
            [name]: value
        })
    };


    createUser = (event) => {
        event.preventDefault()
        event.target.reset()
        const { name, email, password } = this.state

        let user = {
            name: name,
            email: email,
            password: password
        }

        fetch("http://localhost:3000/api/v1/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ user })
        })
            .then(r => r.json())
            .then(response => {
                // We are reciving a status of "created" if the user is valid and saved to the database
                if (response.status === "created") {
                    this.setState({ created: true })
                }
            })

    }





    render() {
        return (
            <div>
                <BlankHeader/>
                <br/><br/>
                <center>
                {this.state.created ? <Redirect to="/login" /> : <div>
                    <Card border="secondary" style={{width: '20rem'}}>
                    <br/><br/>    
                    <Card.Title as='h3'>Please Sign Up</Card.Title>
                    <Card.Body>
                    <Form onSubmit={this.createUser}>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control type="text" name="email" placeholder="Email" onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group controlId="formBasicName">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control type="text" name="name" placeholder="Name" onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password:</Form.Label>
                            <Form.Control type="text" name="password" placeholder="Password" onChange={this.handleChange} />
                        </Form.Group>



                        <Button variant='primary' type="submit">Submit</Button>

                    </Form>
                    <br/>
                    <Link to="/"> Home Page</Link>
                    </Card.Body>
                    </Card>
                </div>}
                </center>
            </div>
        );
    }
}

export default SignupForm;