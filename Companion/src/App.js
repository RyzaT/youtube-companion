
import React from 'react';
import './App.css';

import WelcomeModal from './Components/Modal'
import Navbar from './Components/Navbar';
import Jumbotron from "./Components/Jumbotron";
import Searchbar from "./Components/Searchbar";
import Profile from "./Components/Profile";
import Playlist from "./Components/Playlist";
import Footer from "./Components/Footer";


function App() {
  return (
    <div className="App">
     <WelcomeModal/>
     <Navbar/>
     <Jumbotron />
     <Searchbar />
     <Profile />
     <Playlist />
     <Footer />
    </div>
  );
}

export default App;
