import React, { Component } from 'react';
import Header from './Header'
import TransContainer from './TransContainer'
import Modal from './Modal'
// import Modal from 'react-modal'
// import UpdateInfo from './UpdateInfo'
// import { Link, Redirect } from 'react-router-dom';

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
            console.log(data)
            
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
        console.log(e.target[1].value)
        let date = e.target[0].value
        let category = e.target[1].value
        let description = e.target[2].value
        let amount = parseFloat(e.target[3].value)
        let user = this.props.user.id

        fetch(transactionsUrl, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        "Authorization": `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({
        "date": date,
        "category": category,
        "description": description,
        "amount": amount,
        "user_id": user


      })
    })
    .then(res => res.json())
    .then(newTrans => {
      return this.setState({
        transactions: [...this.state.transactions,newTrans]
      })
    })

    }

    // delete
  delete = (tranId) =>{
    // console.log(tranId)
    let updateTransList = this.state.transactions.filter(transaction => transaction.id !== tranId)
    
    fetch(`http://localhost:3000/api/v1/transactions/${tranId}`, {
      method:"DELETE"
      })
      .then(this.setState({
        transactions: updateTransList
      }))
    
  }

    


    



    render(){

        
        return(
            <div>
                {this.props.user?
                <div>
                <Header handleLogin={this.props.handleLogin} history={this.props.history}/>
                <div> 

                 <h1>Hello  {this.props.user.name}</h1>

                 <button onClick={(e) => {this.showModal(e)}}> New Transaction</button>
                 <Modal addNewTrans={this.addNewTrans} onClose={this.showModal} show={this.state.show}></Modal>
                
                
                 {/* <UpdateInfo user={this.props.user}/> */}

                 <TransContainer transactions={this.state.transactions.filter(transaction => transaction.user_id === this.props.user.id)}
                 delete={this.delete}
                 />
                </div>
                </div>
                : null}

            </div>

        )
    }
}

export default MainPage;