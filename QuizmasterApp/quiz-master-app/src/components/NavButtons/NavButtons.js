// React
import React from "react";

// Component
import NavButton from "../NavButton/NavButton";

// Artifacts
import "bootstrap/dist/css/bootstrap.min.css";

// Css
import "./NavButtons.css";

function NavButtons() {
  return (
      <div className="div-content ">
        <div className="float-left align-bottom-left">
          <NavButton></NavButton>
        </div>
        <div className="float-right align-bottom-right">
          <NavButton></NavButton>
        </div>
      </div>
  );
}

export default NavButtons;
