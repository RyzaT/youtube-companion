import React from "react";
import YouTube from 'react-youtube';
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






  return (
  
    <Card style={{ width: '18rem' }}>
      <Card.Title>Play list</Card.Title>
       <YouTube  opts={opts}  />
      <Card.Body>
        
        <Card.Text>
          <p>List ID</p>
        {props.listID}
        </Card.Text>
        <Button variant="primary">Could be save to current profile</Button>
      </Card.Body>
    </Card>
  );
}

export default ListCard;
