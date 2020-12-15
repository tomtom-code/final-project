import React, { Component } from 'react';
import Header from './Header'
// import { Card, Button, Container} from 'react-bootstrap'


class UpdateInfo extends Component {

    render() {
        return (
            <div>
                <Header handleLogin={this.props.handleLogin} history={this.props.history}/>
                {this.props.user? 

                <div>

                    <h3>Update Info Page</h3>
                
                    Username: {this.props.user.name}
                    <br/>
                    Email: {this.props.user.email}
                    <br/>

                    <form>
                    <input type="name" name="name" placeholder="update username" className="input-text"/>
                    <br/>
                    <input type="password" name="password" placeholder="update password" className="input-text"/>
                    <br/>
                    <input type="email" name="email" placeholder="update email" className="input-text"/>
                    <br/>
                    <input type="submit" name="submit" value="Update Info" className="submit"/>
                    <br/>
                    </form>
                
                
                </div>
                :null}

                    
                    
                

               
            </div>
        )
    }
}

export default UpdateInfo;