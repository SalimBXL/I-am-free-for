import React from "react";
import { Routes, Route } from "react-router-dom";
import Skin from "./Skin";
import Home from "./Home";
import Profile from "./Profile";
import "./App.css";

export default function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Skin><Home/></Skin> } />
        <Route path="/profile" element={ <Skin><Profile/></Skin> } />
      </Routes>
    </div>
  );
}
