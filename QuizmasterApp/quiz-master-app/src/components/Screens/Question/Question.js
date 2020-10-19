// React
import React from "react";
import { useSelector } from 'react-redux';

// Components
import NavButtons from "../../NavButtons/NavButtons";
import QuestionInfo from "../../QuestionInfo/QuestionInfo";
import AnswerStatus from "../../AnswerStatus/AnswerStatus";

// Artifacts
import "bootstrap/dist/css/bootstrap.min.css";
import "./Question.css";

function Question() {
  const questionNumber = useSelector((state) => state.question.questionNumber);
  const question = useSelector((state) => state.question.question);

  return (
    <div>
      <QuestionInfo
        questionNumber={questionNumber}
        question={question}
      ></QuestionInfo>
      <AnswerStatus></AnswerStatus>
      <NavButtons
        title="Next Question?"
        path="/select-question"
        returnButton={false}
      ></NavButtons>
    </div>
  );
}

export default Question;
