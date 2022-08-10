import {useState} from 'react'
import { Button, Modal } from 'react-bootstrap'
import Form from "../components/Form";


const Contact = () => {
  const [show, setShow] = useState(false);

  const [stateFromChild, setstateFromChild] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <h3>This is Contact</h3>
    <Button variant="primary" onClick={handleShow}>
      Launch demo modal
    </Button>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form 
          handleClose={handleClose} 
          ronsProp='Call it my form'
          aliciasProps={['music', 'food']}
          setstateFromChild={setstateFromChild}
          />

        </Modal.Body>
      </Modal>
    </>
  )
}

export default Contact;