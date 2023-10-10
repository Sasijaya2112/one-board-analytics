import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Contact from './Contact';
import Image from 'react-bootstrap/Image';
import logo from '../src/oneboardlogo.png';

function Topnavbar() {
  return (
    <Navbar expand="lg" className="bg-info">
      <Container fluid>
        <Navbar.Brand href="#" className='text-light' style={{ fontWeight: "bold" }} ><Image src={logo} style={{height:'70px',width:'150px'}}></Image></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px', marginLeft:"65%" }}
            navbarScroll
          >
            <Nav.Link href="#Home" className='nav1' >Home</Nav.Link>
            <NavDropdown title="Services" id="navbarScrollingDropdown" className='nav1'>
              <NavDropdown.Item href="#Services1">Data Analytics</NavDropdown.Item>
              <NavDropdown.Item href="#Services2">
                Cloud Solution
              </NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item href="#Services3" >
                Digital Marketing
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="http://www.google.com/" target='blank' className='nav1'>Case studies</Nav.Link>
            {/* <Nav.Link href="#" disabled>
            Services
            </Nav.Link> */}
          </Nav>
          <Form className="d-flex">
            <Contact />
            {/* <Button variant="outline-primary">Contact us</Button> */}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Topnavbar;