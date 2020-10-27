// React
import React from "react";
import { useDispatch, useSelector } from 'react-redux';

// Components
import NavButtons from "../../NavButtons/NavButtons";
import QuestionInfo from "../../QuestionInfo/QuestionInfo";
import AnswerStatus from "../../AnswerStatus/AnswerStatus";
import { roundProgression } from "../../../actions/RoundActions"

// Artifacts
import "bootstrap/dist/css/bootstrap.min.css";
import "./Question.css";

function Question() {
  const questionCounter = useSelector((state) => state.round.questionNumber);
  const roomId = useSelector((state) => state.quizInfo.roomId);
  const question = useSelector((state) => state.question.question);
  const dispatch = useDispatch();
  let path = "";

  if(questionCounter !== 12){
    path = "/select-question";
  } else  {
    path = "/finalize";
  }

  const onProgress = () => {
    dispatch(roundProgression(roomId));
  }

  return (
    <div>
      <QuestionInfo
        questionNumber={questionCounter}
        question={question}
      ></QuestionInfo>
      <AnswerStatus></AnswerStatus>
      <NavButtons
        title="Next Question?"
        path={path}
        returnButton={false}
        callback={onProgress}
      ></NavButtons>
    </div>
  );
}

export default Question;
