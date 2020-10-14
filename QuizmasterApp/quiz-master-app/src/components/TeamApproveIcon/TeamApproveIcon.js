//React
import React from "react";

// Artifacts
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

// Css
import "./TeamApproveIcon.css";

function TeamApproveIcon() {
  return (
      <button type="button" className="btn btn-color btn-circle btn-xl">
        <FontAwesomeIcon
          icon={faTimesCircle}
          className="icon-placement"
        />
        Team
      </button>
  );
}

export default TeamApproveIcon;