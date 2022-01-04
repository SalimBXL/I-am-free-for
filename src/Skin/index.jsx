import React from "react";
import Header from "../Header";
import Menu from "../Menu";
import "./Skin.css";

const Skin = ({children}) => (
    <div className="Skin">
        <Header />
        <div className="Skin-main">{children}</div>
        <Menu />
    </div>
);

export default Skin;