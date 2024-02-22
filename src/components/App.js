import React from "react";
import {username, city, image} from "../data/user"
import About from "./About";
import Home from "./Home";
import NavBar from "./NavBar";


function App() {
  return (
    <div>
      <NavBar />
      <Home username={username} city={city}/>
      <About image={image}/>
    </div>
  );
}

export default App;
