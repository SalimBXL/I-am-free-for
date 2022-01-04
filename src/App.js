import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import MainScreen from "./MainScreen";
import Menu from "./Menu";
import Profile from "./Profile";
import "./App.css";

export default function App() {

  const Home = () => (
    <div className="Container">
      <Header />
      <MainScreen />
      <Menu />
    </div>
  );

  return (
    <div className="App">

      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/profile" element={ <Profile /> } />
      </Routes>
    </div>
  );
}
