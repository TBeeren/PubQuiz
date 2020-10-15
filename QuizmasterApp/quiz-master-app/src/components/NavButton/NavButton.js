//React
import React from "react";

// Artifacts
import "bootstrap/dist/css/bootstrap.min.css";import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

// Css
import "./NavButton.css";

function NavButton() {
  return (
      <button type="button" className="btn btn-color-navbar btn-circle-navbutton btn-xl">
        <FontAwesomeIcon
          icon={faPlay}
        />
      </button>
  );
}

export default NavButton;