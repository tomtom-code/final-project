import React, { Component } from 'react';
import TransCard from './TransCard';




class TransContainer extends Component {
    render(){
        return(
            <div>
                <h2>Transactions</h2>

                 {this.props.transactions.map(transaction => (

                     <TransCard transaction={transaction}/>

                 )
                 )}




             </div> 

        )
    }
}

export default TransContainer;