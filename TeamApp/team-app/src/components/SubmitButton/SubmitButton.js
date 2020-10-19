//React
import React from  'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import {submitAnswer} from '../../actions/QuestionActions'

// Artifacts
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from  '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

// Css
import "./SubmitButton.css";

function SubmitButton() {
  const roomId = useSelector((state) => state.signUpInfo.roomId);
  const teamName = useSelector((state) => state.signUpInfo.teamName);
  const questionId = useSelector((state) => state.questionInfo.questionId);
  const answer = useSelector((state) => state.questionInfo.teamAnswer);
  const isResubmit = useSelector((state) => state.questionInfo.isResubmit);
  const dispatch = useDispatch();

  const handleClick = () =>
  {
    dispatch(submitAnswer(roomId, teamName, questionId, answer, isResubmit));
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