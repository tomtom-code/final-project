import React, { Component } from 'react';

// import { Card, Button, Container} from 'react-bootstrap'


class Modal extends Component {

    onClose = (e) => {
        this.props.onClose && this.props.onClose(e);
    };

        
        render(){
            if(!this.props.show){
                return null;
            }
            return (
                <div>
                    <div>{this.props.children}</div>
                    <div>

                    <h3>Transaction Form</h3>
                        <form onSubmit={(e) => this.props.addNewTrans(e)}>
                        <input type="date" name="date" placeholder="input the date" className="input-text"/>
                        <br/>
                        <label>
                            <select>
                                <option value="food">Food</option>
                                <option value="transportation">Transportation</option>
                                <option value="utilities">Utilities</option>
                                <option value="house">House</option>
                                <option value="clothes">Clothes</option>
                                <option value="car">Car</option>
                                <option value="entertainment">Entertainment</option>
                                <option value="socializing">Socializing</option>
                                <option value="books">Books</option>
                                <option value="health">Health</option>
                                <option value="education">Education</option>
                                <option value="transfer fee">Transfer fee</option>
                                <option value="groceries">Groceries</option>
                                <option value="beauty">Beauty</option>
                        
                            </select> 
                        </label>
                        <br/>
                        <input type="description" name="description" placeholder="memo" className="input-text"/>
                        <br/>
                        <input type="number" name="amount" step="0.1" placeholder="amount" className="form-control"/>
                        <br/>
                        <input type="submit" name="submit" value="submit" className="submit"/>
                        <br/>
                        </form>
                    </div>
                    
                    <div>
                        <button onClick={this.onClose}>
                            Close
                        </button>
                    </div>
                



                    
                  
                </div>
            )
        }
}

export default Modal;

