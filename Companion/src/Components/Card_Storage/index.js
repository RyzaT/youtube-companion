import React from "react";
import YouTube from 'react-youtube';
import { useState } from 'react';
import Searchbar from "../Searchbar";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./style.css";




function ListCardStorage(props) {


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


function removeItem () {

alert("write function to remove this list ID from local storage")



}

  return (
  
    <Card style={{ width: '18rem' }}>
      <Card.Title>Playlist</Card.Title>
       <YouTube  opts={opts}  />
      <Card.Body>
        
        <Card.Text>
        <p>Default profile</p>
        </Card.Text>
        <Button  onClick={removeItem} variant="danger"  >Remove from favourites</Button>
        
      </Card.Body>
    </Card>
  );
}

export default ListCardStorage;
