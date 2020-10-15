//React
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Components
import QuizInformation from "../../QuizInformation/QuizInformation";
import SingleSelectionList from "../../SingleSelectionList/SingleSelectionList";
import NavButtons from "../../NavButtons/NavButtons";
import { fetchQuestions } from '../../../actions/QuestionActions';

// Artifacts
import "bootstrap/dist/css/bootstrap.min.css";

// Css
import "./ChooseQuestion.css";

function ChooseQuestion() {
  const questionNumber = useSelector((state) => state.question.questionNumber);
  const roomId = useSelector((state) => state.quizInfo.roomId)
  const path = `/question/${questionNumber}`;

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchQuestions(roomId));
  });

  return (
    <div>
      <QuizInformation
        title="Choose Question"
        description="Select the next Question"
      ></QuizInformation>
      <SingleSelectionList></SingleSelectionList>
      <NavButtons
        title="Start Question?"
        path={path}
        returnButton={false}
      ></NavButtons>
    </div>
  );
}

export default ChooseQuestion;
