import Carousel from 'react-bootstrap/Carousel';
import logo1 from './Sampleimages/1.png'
import logo2 from './Sampleimages/2.png'
import logo3 from './Sampleimages/3.png'

function Slide() {
  return (
    <Carousel data-bs-theme="light" className='custom-carousel'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={logo1}
          alt="First slide"
        /> 
        {/* <Carousel.Caption>
          <div id='slide1'>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur dolorum<br/> aspernatur dolorem quas eum
                    accusantium eveniet culpa repellendus eligendi.<br/> Omnis facilis, esse pariatur aut cupiditate repellendus vero
                    facere hic minus!</p>
          </div>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={logo2}
          alt="Second slide"
        />
        {/* <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={logo3}
          alt="Third slide"
        />
        {/* <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default Slide;