import React, { useState } from 'react';
import { Card, Form, Button, Modal } from 'react-bootstrap';

function Example(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (e) => {
      props.addNewTrans(e)
      handleClose()
    }
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          New Transaction
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title><h3>Transaction Form</h3></Modal.Title>
          </Modal.Header>

          <Modal.Body>
          <Card border="secondary" style={{ height: '34rem', width: '27rem'}}>
                            <Card.Body>
                            <Form onSubmit={(e) => handleSubmit(e)}>

                                <Form.Group controlId="dateSpendMoney">
                                    <Form.Label>Select date:</Form.Label>
                                    <Form.Control type="date" name="date" placeholder="input the date" className="input-text"/>
                                </Form.Group>
                                <br/>

                                <Form.Group controlId="selectCategory">
                                    <Form.Label>Category</Form.Label>
                            
                                    <Form.Control as="select">
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
                        
                                    </Form.Control>
                            
                                </Form.Group>
                                <br/>

                                <Form.Group controlId="formBasicDescription">
                                    <Form.Label>Memo:</Form.Label>
                                    <Form.Control type="description" name="description" placeholder="memo" className="input-text"/>
                                </Form.Group>
                                <br/>

                                <Form.Group controlId="formBasicAmount">
                                    <Form.Label>Amount:</Form.Label>
                                    <Form.Control type="number" name="amount" step="0.1" placeholder="amount" className="form-control"/>
                                </Form.Group>
                                <br/>


                                <Button variant='outline-info' type="submit">Submit</Button>
                                <br/>

                            </Form >

                            </Card.Body>
                        </Card>

          </Modal.Body>


          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            
          </Modal.Footer>
        </Modal>
      </>
    );
  }
export default Example; 