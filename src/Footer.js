import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Col, Row } from 'react-bootstrap';

function Footer() {
  return (
    <Navbar expand="lg" className="bg-dark lg">
      <Container>
        <Navbar.Brand href="#home" style={{marginLeft: "0%", color:"white"}}>
        <Row ><Col sm={1} className='fs-6'><i class="bi bi-envelope-at-fill"></i> helloteam@1boardanalytics.com <br></br></Col></Row>
        <Row ><Col sm={1} className='fs-6'><i class="bi bi-geo-alt-fill"></i> London, UK   & Chennai, India <br></br></Col></Row>
        <Row ><Col sm={1} className='fs-6'><i class="bi bi-telephone-fill"></i> UK - +443XXXXXXXXX & India - +917806900277<br></br></Col></Row>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Footer;