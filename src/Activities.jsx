import React from "react";
import "./Activities.css";

const activities = require("./data/activities.json");

const ActivityButton = ({ label, checked }) => {
  const handleClick = ({ target }) => {};

  const style = checked
    ? null
    : { backgroundColor: "lightgrey", color: "white" };
  return (
    <button className="Activities-button" style={style} onClick={handleClick}>
      {label.toUpperCase()}
    </button>
  );
};

const Activities = () => {
  return (
    <div className="Activities">
      {activities.map((activity) => (
        <ActivityButton
          key={activity.label}
          label={activity.label}
          checked={activity.checked}
        />
      ))}
    </div>
  );
};

export default Activities;
