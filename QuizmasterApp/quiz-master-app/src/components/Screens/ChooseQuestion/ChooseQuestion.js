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

// Artifacts
import "bootstrap/dist/css/bootstrap.min.css";

// Css
import "./ChooseQuestion.css";

function ChooseQuestion() {
  const questionNumber = useSelector((state) => state.question.questionNumber);
  const roomId = useSelector((state) => state.quizInfo.roomId);
  const dispatch = useDispatch();

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
      ></NavButtons>
    </div>
  );
}

export default ChooseQuestion;
