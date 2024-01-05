import React, { useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import Contactus from './Contactus'; // Replace this with the correct path to your Contactus component


const Connect_Page = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Open Contact Modal
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Me</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Contactus />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Connect_Page ;
