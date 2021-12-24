import React, { useState } from "react";
import "./Activities.css";

const _activities = require("../../data/activities.json");

const ActivityButton = ({ label, checked, onClick }) => {



  const style = checked
    ? null
    : { backgroundColor: "lightgrey", color: "white" };

  const handleClick = () => {
    console.log("click...");
  }


  return (
    <button className="Activities-button" style={style} onClick={handleClick}>
      {label.toUpperCase()}
    </button>
  );
};

const Activities = () => {
  const [myActivities, setMyActivities] = useState(_activities);

  const handleClick = () => {
    console.log("CLICK");
    
  };

  return (
    <div className="Activities">
      {myActivities.map((activity) => (
        <ActivityButton
          key={activity.label}
          label={activity.label}
          checked={activity.checked}
          onClick={handleClick}
        />
      ))}
    </div>
  );
};

export default Activities;
