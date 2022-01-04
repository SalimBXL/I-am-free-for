import React from "react";
import { NavLink } from 'react-router-dom';
import "./Menu.css";

const Menu = () => {

    const isActive = (navData) => navData.isActive 
        ? "Menu-item Menu-item-active" 
        : "Menu-item";

    return (
        <div className="Menu">
        
            <NavLink className={"Menu-item " + isActive} to="/">
                <i className="fas fa-home" />
            </NavLink>

            <NavLink className={"Menu-item " + isActive} to="/profile">
                <i className="fas fa-user-friends"></i>
            </NavLink>

            <div className={"Menu-item " + isActive}><i className="fas fa-home" /></div>

            <div className={"Menu-item " + isActive}><i className="fas fa-home" /></div>

            <div className={"Menu-item " + isActive}><i className="fas fa-home" /></div>

        </div>
    );
}

export default Menu;