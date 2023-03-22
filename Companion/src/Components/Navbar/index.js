import React from 'react'
import 'react-bootstrap'
import 'bootstrap'
import '../Navbar/style.css'
import Logo from '../Navbar/Logo.png'

function Navbar() {
  return (
    <nav class="navbar navbar-light bg-light w-100">
      <div class="container-fluid mx-auto my-auto">
        <a class="navbar-brand mx-auto my-auto" href="#" style={{fontWeight: "bolder"}}>
          <img src={Logo} alt="" width="35" height="45" class="d-inline-block align-text-center" className='navbar-text'/>
             Youtube Companion
        </a>
      </div>
    </nav>
  );
}

export default Navbar;