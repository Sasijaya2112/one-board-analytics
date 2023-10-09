import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Image } from 'react-bootstrap';
import logo from './oneboardlogo.png'

function Servicepopup() {
    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);

    return (
        <>
            <Button onClick={() => setLgShow(true)}>Click to know more!</Button>
            <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        Small Modal
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>...</Modal.Body>
            </Modal>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Get to know some information 
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src={logo}/>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur dolorum aspernatur dolorem quas eum
                        accusantium eveniet culpa repellendus eligendi. Omnis facilis, esse pariatur aut cupiditate repellendus vero
                        facere hic minus!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit ipsum autem temporibus esse facilis tempore,
                        voluptatum ullam voluptatem aspernatur aliquid corporis alias porro iure assumenda maxime! Est optio rerum ab.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate quam, sint unde error dolor qui doloremque
                        delectus laborum inventore consequatur, illum facilis quis. Dolorem delectus nam rem asperiores illum. Ipsum!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi consequuntur dolor hic corporis quod adipisci rem.
                        Ratione error sint consequuntur veritatis saepe praesentium, maxime eum quam consectetur dolor quo nobis!
                    </p>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Servicepopup;