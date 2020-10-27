//React
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// Components
import QuizInformation from "../../QuizInformation/QuizInformation";
import FinalizeSelection from "../../FinalizeSelection/FinalizeSelection";
import NavButtons from "../../NavButtons/NavButtons";
import { fetchScores } from "../../../actions/TeamActions"

// Artifacts
import "bootstrap/dist/css/bootstrap.min.css";

// Css
import "./FinalizeScreen.css";

function FinalizeScreen() {
  const roomId = useSelector(state => state.quizInfo.roomId)
  const [endQuiz, setEndQuiz] = useState(false);
  let buttonHtml = "";
  const dispatch = useDispatch();

  const onSelect = (endQuiz) => {
    setEndQuiz(endQuiz);
  };

  const onNextPage = () => {
    dispatch(fetchScores(roomId))
  }

  if (endQuiz) {
    buttonHtml = (
      <NavButtons title="End the Quiz?" path="/victory" returnButton={false} callback={onNextPage}></NavButtons>
    );
  } else {
    buttonHtml = (
        <NavButtons title="Next Round?" path="/select-categories" returnButton={false}></NavButtons>
      );
  }

  return (
    <div>
      <QuizInformation
        title="What's next?"
        description="Start a new round or end the quiz?"
      ></QuizInformation>
      <FinalizeSelection callback={onSelect}></FinalizeSelection>
      {buttonHtml}
    </div>
  );
}

export default FinalizeScreen;
