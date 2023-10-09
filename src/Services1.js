import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Servicepopup from './Servicepopup';

function Services() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Data analytics</Card.Title>
        <Card.Text>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur dolorum aspernatur dolorem quas eum
                    accusantium eveniet culpa repellendus eligendi. Omnis facilis, esse pariatur aut cupiditate repellendus vero
                    facere hic minus!
        </Card.Text>
        {/* <Button variant="primary">Click to know more!</Button> */}
     <Servicepopup/>
      </Card.Body>
    </Card>
  );
}

export default Services;