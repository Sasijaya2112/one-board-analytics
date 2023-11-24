import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import React, { useState } from 'react';
// import { Form } from 'react-bootstrap';



function RequestForm() {
  
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div id='proposal'>
    <Container fluid>
    <Form style={{borderRadius:'20px', padding:'3%',margin:'3%', marginTop:'8%', marginBottom:'10%',backgroundColor:'aliceblue'}}>
        <h2 className='mt-3 mb-5 text-primary'>Request for Proposal</h2>
      <Row className="mb-3 sm-nowrap">
        <Col sm={6}>
      <Form.Group controlId="formGridPassword" className='mt-2'>
          {/* <Form.Label style={{ textAlign: 'left', marginRight: '0' }}>Name</Form.Label> */}
          <Form.Control type="text" placeholder="Enter Name"/>
        </Form.Group>
        </Col>
        <Col>
        <Form.Group as={Col} controlId="formGridEmail" className='mt-2'>
          {/* <Form.Label>Email</Form.Label> */}
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
      <Col sm={6}>
        <Form.Group as={Col} controlId="formGridEmail" className='mt-3'>
          {/* <Form.Label>Contact No.</Form.Label> */}
          <Form.Control type="text" placeholder="Enter contact number" />
        </Form.Group>
        </Col>
        <Col>
        <Form>
        <Form.Group controlId="exampleForm.SelectCustom" className='mt-3'>
          {/* <Form.Label>Select an option</Form.Label> */}
          <Form.Control as="select" onChange={handleSelectChange}>
            <option value="">Choose Service</option>
            <option value="option1">Data Analytics</option>
            <option value="option2">Cloud Solution</option>
            <option value="option3">Digital Marketing</option>
            {/* Add more options as needed */}
          </Form.Control>
        </Form.Group>
      </Form>
      {/* {selectedOption && (
        <p>Selected Option: {selectedOption}</p>
      )} */}
        </Col>
        <Col>
        <Form.Group as={Col} controlId="formGridPassword" className='mt-3'>
          {/* <Form.Label>Budget</Form.Label> */}
          <Form.Control type="number" placeholder="Enter budget" />
        </Form.Group>
        </Col>
      </Row>
      
      <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              {/* <Form.Label>Project description</Form.Label> */}
              <Form.Control as="textarea" placeholder="Enter your query" rows={3} />
            </Form.Group>

      <Button variant="primary" type="submit" className='mb-3 mt-3'>
        Submit
      </Button>
    </Form>
    </Container>
    </div>
  );
}

export default RequestForm;