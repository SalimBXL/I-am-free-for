import React from "react";
import { NavLink } from 'react-router-dom';
import "./Menu.css";

const Menu = () => {

    const linkColor = (isActive) => isActive.isActive 
        ? "Menu-item Menu-item-active" 
        : "Menu-item";

    return (
        <div className="Menu">
        
            <NavLink className={linkColor} to="/">
                <i className="fas fa-home Menu-item-icon" />
            </NavLink>

            <NavLink className={linkColor} to="/friends">
                <i className="fas fa-user-friends Menu-item-icon" />
            </NavLink>

            <NavLink className={linkColor} to="/config">
                <i className="fas fa-cog Menu-item-icon" />
            </NavLink>
            
        </div>
    );
}

export default Menu;