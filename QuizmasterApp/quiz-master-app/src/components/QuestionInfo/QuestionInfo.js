//React
import React from "react";
import { useSelector } from "react-redux";
import { ProgressBar } from "react-bootstrap";

// Artifacts
import "bootstrap/dist/css/bootstrap.min.css";

// Css
import "./QuestionInfo.css";

function QuestionInfo(props) {
  const nTeams = useSelector(state => state.teamInfo.teams);
  let nAnswers = useSelector(
    (state) => state.answers.teamAnswers
  );
  
  nAnswers = nAnswers.filter((answer, i) => {
    return (answer.teamName !== "");
  });
  const percentage = (100 / nTeams.length) * nAnswers.length;

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-left">
        <h3>Question {props.questionNumber}:</h3>
      </div>
      <ProgressBar
        className="bar-color"
        variant="progress"
        now={percentage}
      ></ProgressBar>
      <div className="d-flex justify-content-left col-md-4 mt-2 padding-left-none">
        <p>{props.question}</p>
      </div>
    </div>
  );
}

export default QuestionInfo;
