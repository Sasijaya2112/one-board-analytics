import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Slide from './Slide';
import video from './Sampleimages/1082422948-preview.mp4'




function Home() {
    return (
        <div id="Home">
            <Slide/>
        <Container>
            {/* <Row sm={1} xs={1} lg={2}>
                <Col> */}
                
                    <p class="about">
                    <br></br>
                        <b className='fs-2'>We are 1Board Analytics</b><br></br>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur dolorum aspernatur dolorem quas eum
                    accusantium eveniet culpa repellendus eligendi. Omnis facilis, esse pariatur aut cupiditate repellendus vero
                    facere hic minus!
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit ipsum autem temporibus esse facilis tempore,
                    voluptatum ullam voluptatem aspernatur aliquid corporis alias porro iure assumenda maxime! Est optio rerum ab.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate quam, sint unde error dolor qui doloremque
                    delectus laborum inventore consequatur, illum facilis quis. Dolorem delectus nam rem asperiores illum. Ipsum!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi consequuntur dolor hic corporis quod adipisci rem.
                    Ratione error sint consequuntur veritatis saepe praesentium, maxime eum quam consectetur dolor quo nobis!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, consequatur asperiores enim nemo voluptatem, fuga
                    neque similique hic, sed temporibus accusantium facere aliquam iste magni! Hic temporibus at illo rem.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero deleniti, saepe labore facilis rerum ut debitis
                    quas excepturi totam reprehenderit sequi ullam impedit perferendis dolore maxime repudiandae nulla doloremque
                    animi!
                </p>
            {/* </Col>
            <Col>
                <Slide/>
            </Col>
        </Row> */}
    </Container >
    </div>
  );
}

export default Home;