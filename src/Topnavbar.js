import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Contact from './Contact';
import Image from 'react-bootstrap/Image';
import logo from '../src/BoardAnalytics.png';
import { useState } from 'react';
import { Dropdown } from 'react-bootstrap';

function Topnavbar() {

const [navbar, setNavebar] = useState(false);

const changeBackground = () => {
  if(window.scrollY>=80){
    setNavebar(true);
  }
  else{
    setNavebar(false);
  }
}

window.addEventListener('scroll',changeBackground);

  return (
    <Navbar expand="lg" className={navbar? 'navbar active fixed-top':'navbar fixed-top'}>
      <Container fluid>
        <Navbar.Brand href="#" className='text-light' style={{ fontWeight: "bold" }} ><Image src={logo} style={{height:'60px',width:'130px'}}></Image></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" id="custom-toggle" />
        <Navbar.Collapse id="navbarScroll" >
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px', marginLeft:"60%" }}
            navbarScroll
          >
            <Nav.Link href="#Home" className='nav1 m-1' style={{color:'white',fontWeight:"bold"}} >Home</Nav.Link>
            <Dropdown className="nav2 mx-3">
        <Dropdown.Toggle id="dropdown-autoclose-true" aria-expanded="false" data-mdb-toggle="dropdown" className='dropdown-toggle' variant='none' style={{color:'white', fontWeight:'bold'}}>
          Services
        </Dropdown.Toggle>
        <Dropdown.Menu className='dropdown-menu'>
          <Dropdown.Item href="#Services1">Data Analytics</Dropdown.Item>
          <Dropdown.Item href="#Services2">Cloud Solution</Dropdown.Item>
          <Dropdown.Item href="#Services3">Digital Marketing</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

            <Nav.Link href="http://www.google.com/" target='blank' className='nav1 m-1' style={{color:'white',fontWeight:"bold"}}>Case studies</Nav.Link>
            <Contact/>
          </Nav>
          {/* <Form className="d-flex">
            <Button variant="outline-primary">Contact us</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Topnavbar;