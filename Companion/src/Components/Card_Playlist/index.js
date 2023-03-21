import React from "react";
import YouTube from 'react-youtube';
import { useState } from 'react';
import Searchbar from "../Searchbar";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Modal } from 'react-bootstrap';
import "./style.css";

function ListCard(props) {
  const opts = {
    height: '180',
    width: '180',
    playerVars: {
      autoplay: 0,
      loop: 0,
      listType: 'playlist',
      list: props.listID
    },
  };

  const [showModal, setShowModal] = useState(false);

  const savePlaylist = () => {
    setShowModal(true);
    let taskSaved = [];
    taskSaved = getTasks(taskSaved);
    console.log(taskSaved)

    function getTasks(arr) {
      if (localStorage.getItem("taskObject") === null) {
        arr = [];
      } else {
        arr = JSON.parse(localStorage.getItem("taskObject"));
      }
      return arr;
    }

    let taskObject = getTasks(taskSaved);
    let userSave = {
      profile: "default",
      savedList: props.listID
    }
    taskObject.push(userSave);
    localStorage.setItem("taskObject", JSON.stringify(taskObject));
    taskSaved = taskObject;
    setTimeout(() => {
      setShowModal(false);
    }, 1000);
  }

  return (
    <div>
      <Card className="cardPlaylist" style={{ width: '18rem' }}>
        <Card.Body >
          <YouTube opts={opts} />
          <Button onClick={savePlaylist} variant="primary"  >Save</Button>
        </Card.Body>
      </Card>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Body style={{color: "black"}}>Song saved</Modal.Body>
      </Modal>
    </div>
  );
}

export default ListCard;
