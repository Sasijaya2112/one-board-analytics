import logo from './logo.svg';
import './App.css';
import Topnavbar from './Topnavbar';
import Home from './Home';
import Services1 from './Services1';
import Services2 from './Services2';
import Services3 from './Services3';
import { Col, Row } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Topnavbar/>
      <Home/>
      <br></br><br></br>
      <b>SERVICES</b>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
      <Row className='d-flex m-5'>
        <Col><Services1/></Col>
        <Col><Services2/></Col>
        <Col><Services3/></Col>
      </Row>
    </div>
  );
}

export default App;
