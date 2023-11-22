import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Servicepopup from './Servicepopup';
import './oneboardlogo.png'
import logo from './Sampleimages/2.png'

function Services() {
  return (
    <div id="Services2">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={logo} />
      <Card.Body>
        <Card.Title>Cloud Solution</Card.Title>
        <Card.Text>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur dolorum aspernatur dolorem quas eum
                    accusantium eveniet culpa repellendus eligendi. Omnis facilis, esse pariatur aut cupiditate repellendus vero
                    facere hic minus!
        </Card.Text>
        {/* <Button variant="success">Click to know more!</Button> */}
        <Servicepopup/>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Services;