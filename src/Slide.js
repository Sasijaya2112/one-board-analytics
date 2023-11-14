import Carousel from 'react-bootstrap/Carousel';
import logo1 from './Sampleimages/1.png'
import logo2 from './Sampleimages/2.png'
import logo3 from './Sampleimages/3.png'
import { Button } from 'react-bootstrap';

function Slide() {
  return (
    <Carousel data-bs-theme="light" className='custom-carousel'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={logo1}
          alt="First slide"
        /> 
        <Carousel.Caption style={{marginLeft:'6%'}}>
          <div id='slide1'>
          <h2>First slide label</h2>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur dolorum<br/> aspernatur dolorem quas eum
                    accusantium eveniet culpa repellendus eligendi.<br/> Omnis facilis, esse pariatur aut cupiditate repellendus vero
                    facere hic minus!</p>
          </div>
          <Button variant="danger" type="submit" style={{marginLeft:'30%'}}>
        Submit
      </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={logo2}
          alt="Second slide"
        />
        <Carousel.Caption style={{marginLeft:'6%'}}>
           <div id='slide1'>
          <h2>Second slide label</h2>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur dolorum<br/> aspernatur dolorem quas eum
                    accusantium eveniet culpa repellendus eligendi.<br/> Omnis facilis, esse pariatur aut cupiditate repellendus vero
                    facere hic minus!</p>
          </div>
          <Button variant="danger" type="submit" style={{marginLeft:'30%'}}>
        Submit
      </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={logo3}
          alt="Third slide"
        />
        <Carousel.Caption style={{marginLeft:'6%'}}>
          <div id='slide1'>
          <h2>Third slide label</h2>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur dolorum<br/> aspernatur dolorem quas eum
                    accusantium eveniet culpa repellendus eligendi.<br/> Omnis facilis, esse pariatur aut cupiditate repellendus vero
                    facere hic minus!</p>
          </div>
          <Button variant="danger" type="submit" style={{marginLeft:'30%'}}>
        Submit
      </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slide;