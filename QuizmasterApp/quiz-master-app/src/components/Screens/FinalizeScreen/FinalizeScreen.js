//React
import React, { useState } from "react";
import { useSelector } from "react-redux";

// Components
import QuizInformation from "../../QuizInformation/QuizInformation";
import FinalizeSelection from "../../FinalizeSelection/FinalizeSelection";
import NavButtons from "../../NavButtons/NavButtons";

// Artifacts
import "bootstrap/dist/css/bootstrap.min.css";

// Css
import "./FinalizeScreen.css";

function FinalizeScreen() {
  const roomId = useSelector(state => state.quizInfo.roomId)
  const [endQuiz, setEndQuiz] = useState(false);
  const applicationHost = "http://localhost:3010";
  let buttonHtml = "";

  const onSelect = (endQuiz) => {
    setEndQuiz(endQuiz);
  };

  const updateScores = async () => {
    await fetch(
      `${applicationHost}/api/v1/games/${roomId}/round`,
      {
        method: "Put",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  if (endQuiz) {
    buttonHtml = (
      <NavButtons title="End the Quiz?" path="/victory" returnButton={false} callback={updateScores}></NavButtons>
    );
  } else {
    buttonHtml = (
        <NavButtons title="Next Round?" path="/select-categories" returnButton={false} callback={updateScores}></NavButtons>
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
