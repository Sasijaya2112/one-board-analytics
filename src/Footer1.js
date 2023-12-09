import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer1 = () => {
  return (
    <footer className="bg-dark text-light">
      <Container>
        <Row >
          <Col md={4} className='mt-md-5 mt-3'>
          <h5><i class="bi bi-envelope-at-fill"></i> Email</h5>
            <p>helloteam@1boardanalytics.com</p>
          </Col>
          <Col md={4} className='mt-md-5 mt-3'>
            <h5><i class="bi bi-geo-alt-fill"></i> Location</h5>
            <p>London, UK & Chennai, India </p>
          </Col>
          <Col md={4} className='mt-md-5 mt-3'>
            <h5><i class="bi bi-telephone-fill"></i> Contact</h5>
            <p>UK:+442045755555 & India:+919342311748 </p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-5">
            <p>&copy; {new Date().getFullYear()} Developed by DevElev</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer1;
