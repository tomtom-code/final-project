import React, { Component } from 'react';
// import { Card, Button, Container} from 'react-bootstrap'


class TransCard extends Component {

    render() {
        return (
            <div>
                <h3>{this.props.transaction.date}</h3>
                <h5>
                    category : {this.props.transaction.category}<br></br>
                    ${this.props.transaction.amount}  {this.props.transaction.description}
                </h5>


                    
                    
                


            </div>
        )
    }
}

export default TransCard;