import React from "react";
import "./Friends.css";

const friends = require("../../data/friends.json");

const Friend = ({friend}) => {

    const hiddenActivities = friend.hide.join(" ");

    return (
    <p key={friend.id} className="Friends-Friend">
        <span class="material-icons">person</span>
        {friend.pseudo} ({friend.phone}) -- {hiddenActivities}
    </p>
)}

const Friends = () => {
    return (<div>
        <h3>Friends</h3>
        {friends.map((friend) => (
            <Friend key={friend.id} friend={friend}/>
        ))}
    </div>);
}

export default Friends;