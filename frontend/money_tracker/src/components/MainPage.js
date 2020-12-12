import React, { Component } from 'react';
import Header from './Header'
import TransContainer from './TransContainer'
import { Link, Redirect } from 'react-router-dom';

const transactionsUrl = 'http://localhost:3000/api/v1/transactions'




class MainPage extends Component {

    state = {
        transactions: []
    }

    componentDidMount(){
        fetch(transactionsUrl,{
            headers: {
                "Authorization": `Bearer ${localStorage.token}`
            }
        })
        .then(res => res.json())
        .then(data =>{
            this.setState({
                transactions: data
            })
        })
    }

    


    



    render(){

        
        return(
            <div>
                <Header handleLogin={this.props.handleLogin} history={this.props.history}/>
                <div> 

                 <h1>Hello {this.props.user? this.props.user.name : null}</h1>
                
                 

                 <TransContainer transactions={this.state.transactions}/>
                </div>

            </div>

        )
    }
}

export default MainPage;