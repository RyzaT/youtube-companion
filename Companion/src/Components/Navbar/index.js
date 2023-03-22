import React from 'react'
import 'react-bootstrap'
import 'bootstrap'
import '../Navbar/style.css'
import Logo from '../Navbar/Logo.png'

function Navbar() {
  return (
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid mx-auto my-auto">
        <a class="navbar-brand mx-auto my-auto" href="/">
          <img src={Logo} alt="" width="40" height="40" class="d-inline-block align-text-center"/>
             Youtube Companion
        </a>
      </div>
    </nav>
  );
}

export default Navbar;