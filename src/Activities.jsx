import React from "react";
import "./Activities.css";

const activities = [
  { label: "sport", checked: true },
  { label: "coffee", checked: false },
  { label: "restaurant", checked: false },
  { label: "bars", checked: false },
  { label: "club", checked: false },
  { label: "cinema", checked: true },
  { label: "netflix", checked: false },
  { label: "adult", checked: false }
];

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
