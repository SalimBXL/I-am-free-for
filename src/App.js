import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Skin from "./Skin";
import Home from "./pages/Home";
import Friends from "./pages/Friends";

import Config from "./pages/Config";
import "./App.css";

export default function App() {

  const [isFetchingData, setIsFetchingData] = useState(false);


  useEffect(() => {
      setIsFetchingData(true);

      console.log("Page loading");

      const timer = setTimeout(() => {
        console.log('This will run after 3 seconds!')
      }, 3000);
      


      setIsFetchingData(false);
      return () => clearTimeout(timer);
  },[]);

  return (
    <div className="App">

      { isFetchingData 
        ? <div><h1>Loading...</h1></div>
        : <Routes>
            <Route path="/" element={ <Skin><Home/></Skin> } />
            <Route path="/friends" element={ <Skin><Friends/></Skin> } />
            <Route path="/config" element={ <Skin><Config/></Skin> } />
          </Routes>
      }
    </div>
  );
}
