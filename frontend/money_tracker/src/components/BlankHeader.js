import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';


class BlankHeader extends Component {

    render(){


        return(

        
            
            <Navbar bg="primary" variant="dark" border="primary">
                <Navbar.Brand href="#home">Money Tracker$</Navbar.Brand>
            </Navbar>
            
        


        )
    }
}

export default BlankHeader;