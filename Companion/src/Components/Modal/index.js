import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function WelcomeModal() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className='modal-title' style={{ color: 'black', textDecoration: 'underline' }} >Welcome to Your Youtube Companion</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ color: 'black' }} >
        <p>In order to create a playlist, please follow these steps:</p>
        <ol>
              <li>Create a playlist profile, eg. Gym, Coding, Meditation...</li>
              <li>Type a keyword in the search bar, and click search eg. Rock, Rap, Classical...</li>
              <li>When playlist is created, you can click the save button under a song to save for later use.</li>
            </ol>
      </Modal.Body>
      <Modal.Footer className='modal-footer' style={{color: 'black', justifyContent: 'center' }}>
        <p>Enjoy your playlist. Your Youtube, Your Way!</p>
        <Button variant="primary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default WelcomeModal;
