import React, { Component } from 'react';
import TransCard from './TransCard';
import { Col, Row } from 'react-bootstrap'




class TransContainer extends Component {
    render(){
        return(
            
                <Row>
                    <h2>-Records-</h2>

                    {this.props.transactions.map(transaction => (
                    <Col sm={12} md={6} lg={4} xl={3}>
                     <TransCard transaction={transaction}
                     delete={this.props.delete}
                     /></Col>

                    )
                    )}
                 </Row>




             

        )
    }
}

export default TransContainer;