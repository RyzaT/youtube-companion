import React from "react";
import YouTube from 'react-youtube';
import { useState } from 'react';
// import Searchbar from "../Searchbar";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./style.css";




function ListCard(props) {

  const [message, setMessage] = useState("")

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


  function savePlaylist() {

    // new array for values from a local storage
    let taskSaved = [];
    taskSaved = getTasks(taskSaved);
    console.log(taskSaved)

    // retrieve saved values from local storage if any exists
    function getTasks(arr) {
      if (localStorage.getItem("taskObject") === null) {
        arr = [];
      } else {
        arr = JSON.parse(localStorage.getItem("taskObject"));
      }
      return arr;
    }

    // get updated list of tasks from storage 
    let taskObject = getTasks(taskSaved);
    let userSave = {

      profile: "default",
      savedList: props.listID

    }
    // add new value to array
    taskObject.push(userSave);
    // save to local storage
    localStorage.setItem("taskObject", JSON.stringify(taskObject));

    taskSaved = taskObject;

    setMessage("The song has been saved")

    // set a timeout to clear the message after 2 seconds
    setTimeout(() => {
      setMessage("");
    }, 1000);
  }

  return (

    <Card className="cardPlaylist" style={{ width: '18rem' }}>


      <Card.Body >
        <YouTube opts={opts} />
        <Button onClick={savePlaylist} variant="primary"  >Save</Button>
        <div className="save-message">{message}</div> {/* display the state in a separate div */}
      </Card.Body>
    </Card>
  );
}

export default ListCard;