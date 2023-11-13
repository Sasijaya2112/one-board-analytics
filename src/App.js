import './App.css';
import Topnavbar from './Topnavbar';
import Home from './Home';
import Services1 from './Services1';
import Services2 from './Services2';
import Services3 from './Services3';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from './Footer';
import MoveToTop from './Movetotop';
import RequestForm from './RequestForm';



function App() {
  return (
    <div className="App">
      <Topnavbar/>
      <Home/>
      <br></br><br></br>
      <b className='fs-2'>SERVICES</b>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
      <Container>
      <Row className=''>
        <Col className='p-2 p-md-3 p-lg-4 m-lg-5 '><Services1/></Col>
        <Col className='p-2 p-md-3 p-lg-4 m-lg-5 '><Services2/></Col>
        <Col className='p-2 p-md-3 p-lg-4 m-lg-5 '><Services3/></Col>
      </Row>
      <RequestForm/>
      </Container>
      <Footer/>
      <MoveToTop/>
    </div>
  );
}

export default App;
