// import React, { Component } from 'react';
// import { Card, Form, Button } from 'react-bootstrap';
// // import { Card, Button, Container} from 'react-bootstrap'


// class Modal extends Component {

//     onClose = (e) => {
//         this.props.onClose && this.props.onClose(e);
//     };

        
//         render(){
//             if(!this.props.show){
//                 return null;
//             }
//             return (
//                 <div>
                    
//                         <div>{this.props.children}</div>
                        
                       
//                             <h3>Transaction Form</h3>
                        


//                         <div>
                        

//                         <Card border="secondary" style={{ height: '34rem', width: '27rem'}}>
//                             <Card.Body>
//                             <Form onSubmit={(e) => this.props.addNewTrans(e)}>

//                                 <Form.Group controlId="dateSpendMoney">
//                                     <Form.Label>Select date:</Form.Label>
//                                     <Form.Control type="date" name="date" placeholder="input the date" className="input-text"/>
//                                 </Form.Group>
//                                 <br/>

//                                 <Form.Group controlId="selectCategory">
//                                     <Form.Label>Category</Form.Label>
                            
//                                     <Form.Control as="select">
//                                         <option value="food">Food</option>
//                                         <option value="transportation">Transportation</option>
//                                         <option value="utilities">Utilities</option>
//                                         <option value="house">House</option>
//                                         <option value="clothes">Clothes</option>
//                                         <option value="car">Car</option>
//                                         <option value="entertainment">Entertainment</option>
//                                         <option value="socializing">Socializing</option>
//                                         <option value="books">Books</option>
//                                         <option value="health">Health</option>
//                                         <option value="education">Education</option>
//                                         <option value="transfer fee">Transfer fee</option>
//                                         <option value="groceries">Groceries</option>
//                                         <option value="beauty">Beauty</option>
                        
//                                     </Form.Control>
                            
//                                 </Form.Group>
//                                 <br/>

//                                 <Form.Group controlId="formBasicDescription">
//                                     <Form.Label>Memo:</Form.Label>
//                                     <Form.Control type="description" name="description" placeholder="memo" className="input-text"/>
//                                 </Form.Group>
//                                 <br/>

//                                 <Form.Group controlId="formBasicAmount">
//                                     <Form.Label>Amount:</Form.Label>
//                                     <Form.Control type="number" name="amount" step="0.1" placeholder="amount" className="form-control"/>
//                                 </Form.Group>
//                                 <br/>


//                                 <Button variant='outline-info' type="submit">Submit</Button>
//                                 <br/>

//                             </Form >

//                             </Card.Body>
//                         </Card>

                           
//                         </div>


                        
//                         <div>
//                             <button onClick={this.onClose}>
//                                 Close
//                             </button>
//                         </div>
                        
                


                    
                    
                  
//                 </div>
//             )
//         }
// }

// export default Modal;

