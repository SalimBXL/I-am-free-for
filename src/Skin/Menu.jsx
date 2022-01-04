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
                <i className="fas fa-home Menu-item-icon" />
            </NavLink>

            <NavLink className={"Menu-item " + isActive} to="/profile">
                <i className="fas fa-user-friends Menu-item-icon" />
            </NavLink>

            <NavLink className={"Menu-item " + isActive} to="/config">
                <i className="fas fa-cog Menu-item-icon" />
            </NavLink>
            
        </div>
    );
}

export default Menu;