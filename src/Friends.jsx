import React from "react";
import "./Friends.css";

const friends = [
    { "id": 0, "pseudo": "Pseudo#1", "phone": "phoneNumber#1" },
    { "id": 1, "pseudo": "Pseudo#2", "phone": "phoneNumber#2" }
];

const Friend = ({friend}) => {
    return (
    <p key={friend.id} className="Friends-Friend">
        {friend.pseudo} ({friend.phone})
    </p>)}

const Friends = () => {
    return (<div>
        <h3>Friends</h3>
        {friends.map((friend) => <Friend key={friend.id} friend={friend}/>)}
    </div>);
}

export default Friends;