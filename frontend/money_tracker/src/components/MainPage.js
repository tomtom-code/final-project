import React, { Component } from 'react';
import Header from './Header'
import TransContainer from './TransContainer'
import Modal from './Modal'
// import Modal from 'react-modal'
// import UpdateInfo from './UpdateInfo'
import { Link, Redirect } from 'react-router-dom';

const transactionsUrl = 'http://localhost:3000/api/v1/transactions'




class MainPage extends Component {

    state = {
        transactions: [],
        show: false
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

    showModal =(e) => {
        this.setState({
            show: !this.state.show
        });
    }

    addNewTrans =(e) => {
        e.preventDefault()
        console.log(e.target[0].value)
        // let date = e.target[0].value
        // let category = e.target[1].value
        // let description = e.target[2].value
        // let amount = e.target[3].value

    }

    


    



    render(){

        
        return(
            <div>
                <Header handleLogin={this.props.handleLogin} history={this.props.history}/>
                <div> 

                 <h1>Hello {this.props.user? this.props.user.name : null}</h1>

                 <button onClick={(e) => {this.showModal(e)}}> New Transaction</button>
                 <Modal addNewTrans={this.addNewTrans} onClose={this.showModal} show={this.state.show}></Modal>
                
                
                 {/* <UpdateInfo user={this.props.user}/> */}

                 <TransContainer transactions={this.state.transactions}/>
                </div>

            </div>

        )
    }
}

export default MainPage;