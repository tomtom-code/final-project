import React, { Component } from 'react';
import Header from './Header'
// import { Card, Button, Container} from 'react-bootstrap'


class Chart extends Component {

    render() {
        return (
            <div>
                <Header handleLogin={this.props.handleLogin} history={this.props.history}/>
                <div>

                <h3>Chart</h3>
                <h5>
                    
                </h5>
                </div>


                    
                    
                

               
            </div>
        )
    }
}

export default Chart;