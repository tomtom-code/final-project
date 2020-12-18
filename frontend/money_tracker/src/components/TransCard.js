import React, { Component } from 'react';
import { Card, Button, Container} from 'react-bootstrap'


class TransCard extends Component {

    render() {
        return (
            <div>
                <Card border="info" className='m-3' style={{ width: '18rem', height: '20rem' }}>
                <h3>{this.props.transaction.date}</h3>
                <Card.Body>
                <h5>
                <Card.Title>category : {this.props.transaction.category}</Card.Title><br></br>
                    ${this.props.transaction.amount}
                    <br/><br/>  
                    memo: {this.props.transaction.description}

                </h5>
                <div>
                <button type='button' class="btn btn-outline-danger btn-sm" onClick={() => {this.props.delete(this.props.transaction.id)}}>Remove</button>
                </div>

                </Card.Body>

                    
                    
                

            </Card>
            </div>
        )
    }
}

export default TransCard;