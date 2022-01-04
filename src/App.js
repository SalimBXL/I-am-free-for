import React from "react";
import { Routes, Route } from "react-router-dom";
import Skin from "./Skin";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Config from "./pages/Config";
import "./App.css";

export default function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Skin><Home/></Skin> } />
        <Route path="/profile" element={ <Skin><Profile/></Skin> } />
        <Route path="/config" element={ <Skin><Config/></Skin> } />
      </Routes>
    </div>
  );
}
