//React
import React from "react";
import { useSelector } from "react-redux";

// Components
import TeamAnswer from "../TeamAnswer/TeamAnswer";


// Artifacts
import "bootstrap/dist/css/bootstrap.min.css";

// Css
import "./AnswerStatus.css";

function AnswerStatus() {
  let teams = useSelector(state => state.answers.teamAnswers);
  const correctAnswer = useSelector(state => state.question.correctAnswer); 
  teams = teams.filter((team) => {
    return (team.value !== null);
  })

  return (
    <div>
      <div className="div-content d-flex justify-content-center">
        <div className="row">
          {teams.map(function (item, i) {
              return (
                <TeamAnswer key={i} name={item.teamName} answer={item.value} correct={correctAnswer} correctness={item.correctness}></TeamAnswer>
              );
          })}
        </div>
      </div>
    </div>
  );
}

export default AnswerStatus;
