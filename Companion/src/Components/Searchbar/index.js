// useState to control search result
import React, {useState} from "react";
// new npm package for convinience
import YouTube from 'react-youtube';
// nmp package for getting data
import axios from 'axios';

import {apiKey} from '../../API/apiKey'
import "./style.css";

function Searchbar() {
  
// manage video id from GET request
  const [videoID, setCount] = useState("");

// embedded player options
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  
   
  // button click event
  function handleClick() {
    alert('You clicked me!');

    const apiCallString ="https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=doom&key="+apiKey
  
    axios.get(apiCallString)
    .then(function (response) {
      // handle success
      //console.log(response);
     setCount(response.data.items[0].id.videoId)
     // enot=response.data.items[0].id.videoId
    
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
    


  }
  
  
  
  
  
  
  return (
    <div><p>Search </p>
    <p>{apiKey} </p>
    <button onClick={handleClick}> Search </button>
    <YouTube videoId={videoID} opts={opts}  />
    
    </div>
  );
}

export default Searchbar;
