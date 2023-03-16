import React from "react";
import { useState } from 'react';
import ListCard from '../Card_Playlist'
import profiles from '../../Profiles/Profile.json'
import "./style.css";


let playLists =[]

function Profile() {

// required to control array update event and accordingly render playlists
  const [returnedLists, setFriends] = useState(playLists);

// generate buttons for each profile read from JSON
const listItems = profiles.map((d) => <button onClick={() => showlists(d.title)} key={d.title}>{d.title}  </button>);

// returns title of each profile stored as button text
  function showlists(value){
  
    function specificList(profile) {
      return profile.title === value;
 
  }

// searches for associated playlists based on button
 let  searchedValue = profiles.find(specificList)
 playLists=searchedValue.links.lists


 // updates array one by one from each found playlist
 searchedValue.links.lists.map(displayItem)
  function displayItem(){
   
    setFriends([...returnedLists, searchedValue.links.lists]);
   
  } 

}

// generates JSX 
const listItems1 = playLists.map((number) =>
<ListCard listID={number}></ListCard> 
);
  
  return (
    <div>
      <p>Profiles from JSON (alternative to local storage)</p>
    <ul className="list-group list-group-flush">
          {listItems}
        </ul>
        <div>
          <p>saved lists go here</p>
        {listItems1}
        </div>
      
        </div>
  );
}

export default Profile;
