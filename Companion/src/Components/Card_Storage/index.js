import React from "react";
import YouTube from 'react-youtube';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./style.css";


function ListCardStorage(props) {

  // control visibility
  const [clicked, setClicked] = useState(true);

  // embedded player options
  const opts = {
    height: '180',
    width: '180',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      loop: 0,
      listType: 'playlist',
      list: props.listID

    },
  };

  function getTasks(arr) {
    if (localStorage.getItem("taskObject") === null) {
      arr = [];
    } else {
      arr = JSON.parse(localStorage.getItem("taskObject"));
    }
    return arr;
  }

  const removeItem = () => {

    setClicked(false);
    // new array for values from a local storage
    let taskSaved = [];
    taskSaved = getTasks(taskSaved);
    for (let i = 0; i < taskSaved.length; i++) {

      if (taskSaved[i].profile === "default" && taskSaved[i].savedList === props.listID) {
        taskSaved.splice(i, 1);

      }
    }
    localStorage.setItem("taskObject", JSON.stringify(taskSaved));

  }

  return (

    <Card className="cardPlaylist" style={{ width: '18rem', visibility: clicked ? "visible" : "hidden" }}>
      <Card.Title>Saved Song</Card.Title>
      <YouTube opts={opts} />
      <Card.Body>

        <Card.Text>
          <p>Default profile</p>
        </Card.Text>
        <Button onClick={removeItem} variant="danger"  >Remove from favourites</Button>

      </Card.Body>
    </Card>
  );
}

export default ListCardStorage;
