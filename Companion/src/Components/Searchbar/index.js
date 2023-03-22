// useState to control search result
import React, { useState } from "react";
// new npm package for convinience
import YouTube from 'react-youtube';
// nmp package for getting data
import axios from 'axios';

import { FaSearch } from 'react-icons/fa';
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi'

import ListCard from '../Card_Playlist'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup'

import { apiKey } from '../../API/apiKey'
import "./style.css";


// potential playlists to be exported to Playlist component. Can be extracted from response.data.items[0].id.playlistId instead of videoID
// or simply contain all video id and playlist ID and play
let playLists = []




function Searchbar() {

  // manage video id from GET request
  const [videoID, setVideo] = useState("");


  // control input value
  const [searchParam, setSearch] = useState({
    keyword: "",

  });

  // control visibility of youtube player - show only if user press trending button
  const [visibility, setVisible] = useState(false)


  // embedded player options
  const opts = {
    height: '240',
    width: '240',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      loop: 0,
      listType:'playlist',
      list: videoID

    },
  };

  // submit form input event
  const handleSubmit = (e) => {
    // prevents the submit button from refreshing the page
    e.preventDefault();


  };


  // button click event
  function getUserDefinedVideo() {


    // first get request for a user defined playlist
    const apiCallString = 'https://youtube.googleapis.com/youtube/v3/search'
    axios.get(apiCallString, {
      params: {
        part: 'snippet',
        q: searchParam.keyword,
        maxResults: 5,
        type: "playlist",
        key: apiKey
      }
    })
      .then(function (response) {
        // handle success
        // console.log(response)
        setVideo(response.data.items[0].id.playlistId)

        playLists = []
        for (let i = 0; i < response.data.items.length; i++) {

          playLists.push(response.data.items[i].id.playlistId)

        }
      
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });

  }

  // second get request for a random popular playlist
  function getRandomVideo() {

    const maxVideosCount = 5

    const apiCallString = 'https://youtube.googleapis.com/youtube/v3/search'
    axios.get(apiCallString, {
      params: {
        q: 'music',
        part: 'snippet',
        type: "playlist",
        key: apiKey,
        order: 'Viewcount',
        maxResults: maxVideosCount

      }
    })
      .then(function (response) {
        // handle success
        let randomVideoID = Math.floor(Math.random() * maxVideosCount) - 1
        setVideo(response.data.items[randomVideoID].id.playlistId)
// make player visible
        setVisible(true)

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });



  }
// generate a list of playlists
  const listItems = playLists.map((number) =>
    <ListCard listID={number}></ListCard>

  );


  return (
    <div className="row">
      <div className="mx-auto col-10 col-md-8 col-lg-6">
        <InputGroup className="mb-3 input-style">
          <Form.Control

            placeholder="type keywords"
            aria-label="type topic"
            aria-describedby="basic-addon2"
            onSubmit={handleSubmit}
            onChange={(e) => setSearch({ ...searchParam, keyword: e.target.value })}

          />
          <Button onClick={getUserDefinedVideo} variant="outline-secondary" className="searchButton">
            <FaSearch />
          </Button>
          <Button onClick={getRandomVideo}>Get Trending List<GiPerspectiveDiceSixFacesRandom></GiPerspectiveDiceSixFacesRandom></Button>
        </InputGroup>

      </div>
      <YouTube opts={opts} style={{ visibility: visibility ? "visible" : "hidden" }} />
      <div >
        {listItems}
      </div>
    </div>
  );
}

export default Searchbar;

