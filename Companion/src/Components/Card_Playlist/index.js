import React from "react";
import YouTube from 'react-youtube';
import { useState } from 'react';
import Searchbar from "../Searchbar";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./style.css";




function ListCard(props) {


// embedded player options
const opts = {
  height: '180',
  width: '180',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
    loop:0,
    listType:'playlist',
    list:props.listID
    
  },
};


function HandleClick () {

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
  savedList:props.listID

}
// add new value to array
taskObject.push(userSave);
// save to local storage
localStorage.setItem("taskObject", JSON.stringify(taskObject));
// add this city to search history
taskSaved = taskObject;



}




  return (
  
    <Card style={{ width: '18rem' }}>
      <Card.Title>Playlist</Card.Title>
       <YouTube  opts={opts}  />
      <Card.Body>
        
        <Card.Text>
        
        {props.listID}
        </Card.Text>
        <Button  onClick={HandleClick} variant="primary">Save</Button>
      </Card.Body>
    </Card>
  );
}

export default ListCard;
