import React from "react";
import "./style.css";


function Playlist(props) {
  return <main className="container">{props.children}</main>;;
}

export default Playlist;
