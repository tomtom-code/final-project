import React, { Component } from 'react';
// import { Card, Button, Container} from 'react-bootstrap'


class Header extends Component {

    state = {
        click: true
    }

    mainBtn = () =>{
        this.props.history.push('/MainPage')
    }

    updateInfoBtn = () =>{
        // let newBoolean = !this.state.click
        // this.setState({
        //     click: newBoolean
        // })
        // if (newBoolean) {
        //     this.props.history.push('/UpdateInfo')
        // } else {
        //     this.props.history.push('/MainPage')
        // }
        this.props.history.push('/UpdateInfo')
    }

    

    handleLogout = () => {

        localStorage.clear();
        this.props.handleLogin(null);
        this.props.history.push("/")
    }

    render() {
        return (
            <div>
                Ï<h5>

                    Header

                </h5>Ï
                <button onClick ={() =>this.handleLogout()}>Logout</button>
                <button onClick ={() =>this.mainBtn()}>Main</button>
                <button onClick ={() =>this.updateInfoBtn()}>Update Info</button>

            </div>
        )
    }
}

export default Header;