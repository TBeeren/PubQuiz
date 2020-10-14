// React
import React from "react";

// Components
import NavButtons from "../../NavButtons/NavButtons";
import QuestionInfo from "../../QuestionInfo/QuestionInfo";
import AnswerStatus from "../../AnswerStatus/AnswerStatus";

// Artifacts
import "bootstrap/dist/css/bootstrap.min.css";
import "./Question.css";

function Question() {
  const questionNumber = 1;
  const question = "Hoeveel tenen heeft Donald Trump op zondagmorgen?";

  return (
    <div>
      <QuestionInfo
        questionNumber={questionNumber}
        question={question}
      ></QuestionInfo>
      <AnswerStatus></AnswerStatus>
      <NavButtons
        title="Next Question?"
        path="/choose-question"
        returnButton={false}
      ></NavButtons>
    </div>
  );
}

export default Question;
