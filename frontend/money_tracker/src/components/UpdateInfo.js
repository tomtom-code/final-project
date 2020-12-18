import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import Header from './Header'
import { Card, Button, Container} from 'react-bootstrap'


class UpdateInfo extends Component {
    state = {

        name: "",
        
        email: ""
    }

    componentDidMount(){
        if(this.props.user){
            this.setState({
                name: this.props.user.name,
                email: this.props.user.email

            })
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {

        e.preventDefault()
        console.log(e.target[0].value)
        let currentUser = this.props.user
        let name = this.state.name
        // let password = e.target[1].value
        let email = this.state.email


        fetch(`http://localhost:3000/api/v1/users/${currentUser.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                "Authorization": `Bearer ${localStorage.token}`
            },
            body: JSON.stringify({
                'name': name,
                
                'email': email

            })
        })
        .then(res=>res.json())
        .then(user => {
            this.props.handleLogin(user)
        }
        )

        
    }



    render() {
        return (
            <div>
                <Header handleLogin={this.props.handleLogin} history={this.props.history}/>
                {this.props.user? 

                <div>

                    <h3>Update Info Page</h3>
                    <br/>
                <center>
                <Card border="secondary" style={{ height: '30rem', width: '27rem'}}>
                    <br/>
                    <Card.Title as='h5'>Username: {this.props.user.name}</Card.Title>
                    <br/>
                    <Card.Title as='h5'>Email: {this.props.user.email}</Card.Title>
                    <br/>
                    <Card.Body>

                    <Form onSubmit={(e) => this.handleSubmit(e)} onChange={(e) => this.handleChange(e)}>

                        <Form.Group controlId="formBasicName">
                            <Form.Label>Username:</Form.Label>
                            <Form.Control type="name" name="name" value={this.state.name} className="input-text"/>
                        </Form.Group>
                         <br/>
                    
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control type="email" name="email" value={this.state.email} className="input-text"/>
                        </Form.Group>
                        <br/>

                        <Button type="submit" variant="outline-primary" className="submit">Submit</Button>
                    <br/>
                    </Form>
                    </Card.Body>
                </Card>
                </center>
                </div>
                :null}

                    
                    
                

               
            </div>
        )
    }
}

export default UpdateInfo;