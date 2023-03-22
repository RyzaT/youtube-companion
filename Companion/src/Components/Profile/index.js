import React from "react";
import { useState } from 'react';
import ListCardStorage from '../Card_Storage'
import { FaUpload } from 'react-icons/fa';
import "./style.css";





let playLists = []



function Profile() {

/* if(playLists.length>0){
  playLists.length=0
} */

  // required to control array update event and accordingly render playlists
  const [returnedLists, setLists] = useState([]);
  const [showSavedLists, setShowSavedLists] = useState(false);

  function getTasks(arr) {
    if (localStorage.getItem("taskObject") === null) {
      arr = [];
    } else {
      arr = JSON.parse(localStorage.getItem("taskObject"));
    }
    return arr;
  }

  function getData() {
    // new array for values from a local storage
    let taskSaved = [];
    taskSaved = getTasks(taskSaved);
    playLists=[]
    // update array of values to render lists
    if (taskSaved.length > 0) {
      for (let i = 0; i < taskSaved.length; i++) {
        playLists.push(taskSaved[i].savedList)
        setLists([...returnedLists, taskSaved[i].savedList]);
      }
      setShowSavedLists(true)
    }
    else {
      alert("No saved playlists")
    }
    
  }










  // generates JSX 
  const listItems1 = playLists.map((number) =>
    <ListCardStorage listID={number}></ListCardStorage>);

  return (
    <div>
      <p style={{color: "black", fontWeight: "bold"}}>
        Display saved items below 
        <span>
          <button onClick={getData} className="viewsavedButton"><FaUpload /></button>
        </span>
        {showSavedLists && (
          <span>
            <button className="hide-button" onClick={() => setShowSavedLists(false)}>Hide saved items</button>
            <div className="card-row">{listItems1}</div> {/* wrap list items in a div with class "card-row" */}
          </span>
        )}
      </p> 
    </div>
  );
}

export default Profile;
