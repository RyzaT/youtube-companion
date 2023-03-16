import React from "react";
import profiles from '../../Profiles/Profile.json'
import "./style.css";

// generate buttons for each profile
  const listItems = profiles.map((d) => <button onClick={() => showlists(d.title)} key={d.title}>{d.title}  </button>);
    
 
  function showlists(value){
   // alert(value)
   // const found = profiles.find(element => element === value);
   // alert(found)
    function isCherries(fruit) {
      return fruit.title === value;
 
 
  }


  let enot = profiles.find(isCherries)
  alert(value+enot.links.lists)
  
}



//console.log((profiles.find(isCherries)));




function Profile() {
  return (
    <div>
      <p>Profiles from JSON (alternative to local storage)</p>
    <ul className="list-group list-group-flush">
          {listItems}
        </ul>
        </div>
  );
}

export default Profile;
