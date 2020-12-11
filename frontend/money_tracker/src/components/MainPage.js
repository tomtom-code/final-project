import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';




class MainPage extends Component {

    


    handleLogout = () => {
        
        localStorage.clear();
        this.props.handleLogin(null);
        this.props.history.push("/")
    }



    render(){

        
        return(
            <div>

                <h1>Hello User</h1>
                {/* {this.props.user} */}

                {/* <button onClick={() => localStorage.clear()}><Redirect to ={'/'}>Logout</Redirect></button> */}
                {/* <button><Link to ={'/'} onClick={() => localStorage.clear()}>Logout</Link></button> */}
                <button onClick ={() =>this.handleLogout()}>Logout</button>



            </div>

        )
    }
}

export default MainPage;