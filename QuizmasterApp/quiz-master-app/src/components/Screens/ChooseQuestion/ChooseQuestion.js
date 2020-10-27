//React
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Components
import QuizInformation from "../../QuizInformation/QuizInformation";
import SingleSelectionList from "../../SingleSelectionList/SingleSelectionList";
import NavButtons from "../../NavButtons/NavButtons";
import {
  fetchQuestions,
} from "../../../actions/QuestionActions";
import { UpdateQuestionAction } from "../../../actions/RoundActions";
import { addNextQuestion } from "../../../actions/QuestionActions"

// Artifacts
import "bootstrap/dist/css/bootstrap.min.css";

// Css
import "./ChooseQuestion.css";

function ChooseQuestion() {
  const questionId = useSelector((state) => state.question.questionNumber);
  const roomId = useSelector((state) => state.quizInfo.roomId);
  const questionCounter = useSelector((state) => state.round.questionNumber);
  const roundNumber = useSelector((state) => state.round.roundNumber);
  const dispatch = useDispatch();

  const onNewQuestion = () => {
    dispatch(UpdateQuestionAction(questionCounter + 1));
    dispatch(addNextQuestion(roomId, questionId));
  }

  useEffect(() => {
    if(roundNumber)
    {
      dispatch(fetchQuestions(roomId, roundNumber));
    }
  },[dispatch, roomId, roundNumber]);

  return (
    <div>
      <QuizInformation
        title="Choose Question"
        description="Select the next Question"
      ></QuizInformation>
      <SingleSelectionList></SingleSelectionList>
      <NavButtons
        title="Start Question?"
        path={"/question/" + questionId}
        returnButton={false}
        callback={onNewQuestion}
      ></NavButtons>
    </div>
  );
}

export default ChooseQuestion;
