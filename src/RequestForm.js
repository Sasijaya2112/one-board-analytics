import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function RequestForm() {
  return (
    <div id='proposal'>
    <Container fluid>
    <Form style={{borderRadius:'20px', padding:'3%',margin:'3%', marginTop:'8%', marginBottom:'10%',backgroundColor:'aliceblue'}}>
        <h2 className='mt-3 mb-5 text-primary'>Request for Proposal</h2>
      <Row className="mb-3 sm-nowrap">
        <Col sm={6}>
      <Form.Group controlId="formGridPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" />
        </Form.Group>
        </Col>
        <Col>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
      <Col sm={6}>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Contact No.</Form.Label>
          <Form.Control type="text" placeholder="Enter number" />
        </Form.Group>
        </Col>
        <Col>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Budget</Form.Label>
          <Form.Control type="number" placeholder="Enter budget" />
        </Form.Group>
        </Col>
      </Row>
      
      <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Project description</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

      <Button variant="danger" type="submit" className='mb-3 mt-3'>
        Submit
      </Button>
    </Form>
    </Container>
    </div>
  );
}

export default RequestForm;