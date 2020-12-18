import React, { Component } from 'react';
import {Navbar, Form, Button, Nav, FormControl } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
// import { Card, Button, Container} from 'react-bootstrap'


class Header extends Component {

    state = {
        click: true
    }

    mainBtn = () =>{
        this.props.history.push('/MainPage')
    }

    updateInfoBtn = () =>{
        // let newBoolean = !this.state.click
        // this.setState({
        //     click: newBoolean
        // })
        // if (newBoolean) {
        //     this.props.history.push('/UpdateInfo')
        // } else {
        //     this.props.history.push('/MainPage')
        // }
        this.props.history.push('/UpdateInfo')
    }

    chartBtn = () => {
        this.props.history.push('/Chart')
    }

    

    handleLogout = () => {

        localStorage.clear();
        this.props.handleLogin(null);
        this.props.history.push("/")
    }

    render() {
        return (
            <div>
                Ï<Navbar bg="primary" variant="dark" border="primary">
                    <Navbar.Brand href="#home">Money Tracker$</Navbar.Brand> 
                    <Nav className='mr-auto'>
                    <Button type='button' variant='info' onClick ={() =>this.handleLogout()}>Logout</Button>
                    <br/>
                    <button type='button' class="btn btn-secondary btn-sm" onClick ={() =>this.mainBtn()}>Main</button>
                    <br/>
                    <button type='button' class="btn btn-warning btn-sm" onClick ={() =>this.updateInfoBtn()}>Update Info</button>
                    <br/>
                    <button type='button' class="btn btn-light btn-sm" onClick ={() =>this.chartBtn()}>Chart</button>
                    </Nav>
                </Navbar>
                
            </div>
        )
    }
}

export default Header;