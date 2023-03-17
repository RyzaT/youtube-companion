import React from "react";
import { useState } from 'react';
import ListCardStorage from '../Card_Storage'
import profiles from '../../Profiles/Profile.json'
import "./style.css";





let playLists = []



function Profile() {

/* if(playLists.length>0){
  playLists.length=0
} */

  // required to control array update event and accordingly render playlists
  const [returnedLists, setLists] = useState([]);

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
      <p>Display saved items below</p>
      <ul className="list-group list-group-flush">

      </ul>
      <div>
        {listItems1}
      </div>

      <div>
        <button onClick={getData}>Show Saved</button>
      </div>
     

    </div>
  );
}

export default Profile;
