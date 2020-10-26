//React
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// Components
import QuizInformation from "../../QuizInformation/QuizInformation";
import SingleSelectionList from "../../SingleSelectionList/SingleSelectionList";
import NavButtons from "../../NavButtons/NavButtons";
import {
  fetchQuestions,
} from "../../../actions/QuestionActions";
import { UpdateQuestionAction } from "../../../actions/RoundActions";

// Artifacts
import "bootstrap/dist/css/bootstrap.min.css";

// Css
import "./ChooseQuestion.css";

function ChooseQuestion() {
  const questionNumber = useSelector((state) => state.question.questionNumber);
  const roomId = useSelector((state) => state.quizInfo.roomId);
  const questionCounter = useSelector((state) => state.round.questionNumber);
  const dispatch = useDispatch();

  const onNewQuestion = () => {
    dispatch(UpdateQuestionAction(questionCounter + 1));
    console.log(questionCounter);
  }

  // TODO: Get rounds dynamically. Now it returns an error.
  useEffect(() => {
    dispatch(fetchQuestions(roomId, 1));
  },[false]);

  return (
    <div>
      <QuizInformation
        title="Choose Question"
        description="Select the next Question"
      ></QuizInformation>
      <SingleSelectionList></SingleSelectionList>
      <NavButtons
        title="Start Question?"
        path={"/question/" + questionNumber}
        returnButton={false}
        callback={onNewQuestion}
      ></NavButtons>
    </div>
  );
}

export default ChooseQuestion;
