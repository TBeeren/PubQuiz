//React
import React from "react";

// Artifacts
import "bootstrap/dist/css/bootstrap.min.css";

// Css
import "./TeamIcon.css";

function TeamIcon(props) {
  const cssClasses = `btn btn-color btn-circle btn-xl intermission-team-icon ${props.placing}`
  return (
      <button type="button" className={cssClasses}>
        <span className="icon-team-name ">{props.name}</span>
        <span className="icon-score">score: {props.score}</span>
      </button>
  );
}

export default TeamIcon;