import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Contact from './Contact';

function Topnavbar() {
  return (
    <Navbar expand="lg" className="bg-info">
      <Container fluid>
        <Navbar.Brand href="#" className='text-light' style={{fontWeight:"bold"}}>1 Board Analytics</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className='nav1' >Home</Nav.Link>
            <NavDropdown title="Services" id="navbarScrollingDropdown" className='nav1'>
              <NavDropdown.Item href="#action3">Data Analytics</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Cloud Solution
              </NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item href="#action5" >
                Digital Marketing
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action2" className='nav1'>Case studies</Nav.Link>
            {/* <Nav.Link href="#" disabled>
            Services
            </Nav.Link> */}
          </Nav>
          <Form className="d-flex">
            <Contact/>
            {/* <Button variant="outline-primary">Contact us</Button> */}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Topnavbar;