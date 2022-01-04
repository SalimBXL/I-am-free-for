import React from "react";
import Menu from "./Menu";
import "./Skin.css";

const Skin = ({children}) => (
    <div className="Skin">

        <header className="Header">
            <h1 className="Header-title">I Am Available</h1>
            <p className="Header-subtitle">Share your free time with friends!</p>
        </header>

        <main className="Skin-main">
            {children}
        </main>

        <Menu />

    </div>
);

export default Skin;