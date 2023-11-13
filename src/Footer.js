import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "bootstrap-icons/font/bootstrap-icons.css";

function Footer() {
  return (
    <Navbar expand="lg" className="bg-dark">
      <Container>
        <Navbar.Brand href="#home" style={{marginLeft: "30%", color:"white"}}>
        <i class="bi bi-envelope-at-fill"></i> Email : helloteam@1boardanalytics.com <br></br>
        <i class="bi bi-geo-alt-fill"></i> Locations : London, UK   & Chennai, India <br></br>
        <i class="bi bi-telephone-fill"></i> Phone : UK - +443XXXXXXXXX & India - +917806900277<br></br>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Footer;