import React from "react";
// import ListCard, {props} from '../Card_Playlist'
// import Searchbar from "../Searchbar";

//import { playLists } from "../Searchbar";
// this should probably return a list from local storage as it looks impossible ot update imported array fro Search bar. If anyone knows, contact me ))

import "./style.css";

// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

function Playlist(props) {
  return <main className="container">{props.children}</main>;;
}


export default Playlist;
