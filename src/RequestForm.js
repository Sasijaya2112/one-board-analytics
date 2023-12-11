import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import React, { useState } from 'react';
import $ from 'jquery';

function RequestForm() {
  
  // const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    // setSelectedOption(event.target.value);
    setService(event.target.value);
  };

  const [name,setName]=useState('');
  const [mail,setMail]=useState('');
  const [contact,setContact]=useState('');
  const [budget,setBudget]=useState(0);
  const [message,setMessage]=useState('');
  const [service,setService]=useState();

  const handleSubmit = () => {
    // e.preventDefault();

    var data = {
      service_id: 'service_viv07y7',
      template_id: 'template_kwovmdo',
      user_id: 'f-wpiVHMwx4vczi58',
      template_params: {
          'name':name,
          'mail':mail,
          'contact':contact,
          'budget':budget,
          'message':message,
          'service':service
      }
  };
   
  $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json'
  }).done(function() {
      // alert('Your mail is sent!');
  }).fail(function(error) {
      alert('Oops... ' + JSON.stringify(error));
  });
  console.log(name,mail,message,service,budget,contact);
  setBudget('');
  setContact('');
  setMail('');
  setMessage('');
  setName('');
  setService('');
  alert('Your request has been sent!');
  }

  return (
    <div id='proposal'>
    <Container fluid>
    <Form style={{borderRadius:'20px', padding:'3%',margin:'3%', marginTop:'8%', marginBottom:'10%',backgroundColor:'aliceblue'}}>
        <h2 className='mt-3 mb-5 text-primary'>Request for Proposal</h2>
      <Row className="mb-3 sm-nowrap">
        <Col sm={6}>
      <Form.Group controlId="formGridPassword" className='mt-2'>
          <Form.Control type="text" placeholder="Enter Name" name='name' onChange={(e) => setName(e.target.value)}/>
        </Form.Group>
        </Col>
        <Col>
        <Form.Group as={Col} controlId="formGridEmail" className='mt-2'>
          {/* <Form.Label>Email</Form.Label> */}
          <Form.Control type="email" placeholder="Enter email" name='mail' onChange={(e) => setMail(e.target.value)}/>
        </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
      <Col sm={6}>
        <Form.Group as={Col} controlId="formGridEmail" className='mt-3'>
          {/* <Form.Label>Contact No.</Form.Label> */}
          <Form.Control type="text" placeholder="Enter contact number" name='contact' onChange={(e) => setContact(e.target.value)}/>
        </Form.Group>
        </Col>
        <Col>
        <Form>
        <Form.Group controlId="exampleForm.SelectCustom" className='mt-3'>
          <Form.Control as="select" onChange={handleSelectChange} name='service'>
            <option value="">Choose Service</option>
            <option value="Data Analytics">Data Analytics</option>
            <option value="Cloud Solution">Cloud Solution</option>
            <option value="Digital Marketing">Digital Marketing</option>
          </Form.Control>
        </Form.Group>
      </Form>
        </Col>
        <Col>
        <Form.Group as={Col} controlId="formGridPassword" className='mt-3'> 
          <Form.Control type="number" placeholder="Enter budget" name='budget' onChange={(e) => setBudget(e.target.value)}/>
        </Form.Group>
        </Col>
      </Row>
      
      <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control as="textarea" placeholder="Enter your query" rows={3} name='message' onChange={(e) => setMessage(e.target.value)}/>
            </Form.Group>

      <Button variant="primary" type="submit" className='mb-3 mt-3' onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    </Container>
    </div>
  );
}

export default RequestForm;