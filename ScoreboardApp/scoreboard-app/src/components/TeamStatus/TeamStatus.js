//React
import React from "react";

// Artifacts
import "bootstrap/dist/css/bootstrap.min.css";

// Css
import "./TeamStatus.css";

function TeamIcon(props) {
  const cssClasses = `btn btn-color btn-circle btn-xl intermission-team-icon`
  return (
      <button type="button" className={cssClasses}>
        <span className="icon-team-name ">{props.name}</span>
      </button>
  );
}

export default TeamIcon;