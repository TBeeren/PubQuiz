//React
import React from "react";

// Artifacts
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

// Css
import "./TeamAnswer.css";

function TeamAnswer() {
  return (
      <button type="button" className="btn btn-color btn-circle btn-xl">
        Team
      </button>
  );
}

export default TeamAnswer;