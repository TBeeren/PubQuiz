//React
import React from  'react';
import {Link} from 'react-router-dom';

// Artifacts
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from  '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

// Css
import "./SubmitButton.css";

function SubmitButton() {

    const handleClick = () =>
    {
        console.log("TODO: get answer from redux store and send");
    }

  return (
      <div id="submit-button-container">
        <Link to="/answered">
          <button type="button" onClick={handleClick} className="btn btn-color-navbar btn-circle-navbutton btn-xl tilt-submit-button">
              <FontAwesomeIcon
              icon={faPlay}
              />
          </button>
        </Link>
      </div>
  );
}

export default SubmitButton;