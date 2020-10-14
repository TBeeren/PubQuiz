//React
import React from  'react';

// Artifacts
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from  '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

// Css
import "./ResubmitButton.css";

function ResubmitButton(props) 
{
    const handleClick = () =>
    {
        console.log("TODO: go back to submit answer screen");
        props.history.goBack();
    }

  return (
      <div id="resubmit-button-container" className="show">
        <button type="button" onClick={handleClick} className="btn btn-color-navbar btn-circle-navbutton btn-xl tilt-button">
            <FontAwesomeIcon
            icon={faPlay}
            />
        </button>
      </div>
  );
}

export default ResubmitButton;