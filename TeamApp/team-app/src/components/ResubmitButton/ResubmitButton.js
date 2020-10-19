//React
import React from  'react';
import {useDispatch, useSelector} from 'react-redux';

import {isResubmitAction} from './../../actions/QuestionActions'

// Artifacts
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from  '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

// Css
import "./ResubmitButton.css";

function ResubmitButton(props) 
{
    const answerStatus = useSelector((state) => state.questionInfo.isCorrect);
    const dispatch = useDispatch();

    const handleClick = () =>
    {
        dispatch(isResubmitAction(true));
        props.history.goBack();
    }

  return (
      <div id="resubmit-button-container" className={answerStatus === "pending" ? "show" : "hidden"}>
        <button type="button" onClick={handleClick} className="btn btn-color-navbar btn-circle-navbutton btn-xl tilt-button">
            <FontAwesomeIcon
            icon={faPlay}
            />
        </button>
      </div>
  );
}

export default ResubmitButton;