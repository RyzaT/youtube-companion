import React from "react";
import styles from "./style.css";
import 'bootstrap/dist/css/bootstrap.css';

window.onload = function() {
  document.querySelector('body').classList.add('loaded')
}

function Jumbotron() {
  return (
    
    <div className={styles.text_container}>
      <h1><span>Your</span><span> YouTube</span></h1>
      <h1><span>Your</span><span> Way</span></h1>
    </div>
  );
}

export default Jumbotron;
