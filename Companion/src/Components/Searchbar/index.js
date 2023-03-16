// useState to control search result
import React, {useState} from "react";
// new npm package for convinience
import YouTube from 'react-youtube';
// nmp package for getting data
import axios from 'axios';

import ListCard from '../Card_Playlist'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup'

import {apiKey} from '../../API/apiKey'
import "./style.css";


 // potential playlists to be exported to Playlist component. Can be extracted from response.data.items[0].id.playlistId instead of videoID
  // or simply contain all video id and playlist ID and play
  let playLists= []

  


function Searchbar() {
  
// manage video id from GET request
  const [videoID, setVideo] = useState("");


  // control input value
  const [searchParam, setSearch] = useState({
    keyword: "",
   
  });

 
 
  
   

// embedded player options
  const opts = {
    height: '240',
    width: '240',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      loop:0,
      listType:'playlist',
      list:videoID
      
    },
  };

  // submit form input event
  const handleSubmit = (e) => {
    // prevents the submit button from refreshing the page
    e.preventDefault();
   // playLists= [];
   
  };

   
  // button click event
  function handleClick() {
   

  //  const apiCallString ="https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=doom&key="+apiKey
  const apiCallString ='https://youtube.googleapis.com/youtube/v3/search'
    axios.get(apiCallString, {
      params: {
        part:'snippet',
        q: searchParam.keyword,
        maxResults: 5,
        type:"playlist",
        key: apiKey
    }
  })
    .then(function (response) {
      // handle success
      console.log(response)
      setVideo(response.data.items[0].id.playlistId)

      playLists=[]
      for (let i=0;i<response.data.items.length;i++){

       playLists.push(response.data.items[i].id.playlistId)
        
      }
      alert(playLists.length )
          
     // console.log(playLists)
  
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
    


  }
  
  
  
  const listItems = playLists.map((number) =>
  <ListCard listID={number}></ListCard> 

);
  
  
  return (
    <div>

<InputGroup className="mb-3">
        <Form.Control
          
          placeholder="type topic"
          aria-label="type topic"
          aria-describedby="basic-addon2"
          onSubmit={handleSubmit}
          onChange={(e) => setSearch({...searchParam, keyword: e.target.value})}
          
        />
        <Button  onClick={handleClick} variant="outline-secondary" id="button-addon2">
          Button
        </Button>
      </InputGroup>

    
  
    <YouTube  opts={opts}  />

   
     <div >
<p>{playLists.length}</p>
{listItems}
 
     </div>
   

    </div>
  );
}








export default Searchbar;
//export {playLists}
