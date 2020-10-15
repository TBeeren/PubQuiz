//React
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

// Components
import QuizInformation from "../../QuizInformation/QuizInformation";
import SingleSelectionList from "../../SingleSelectionList/SingleSelectionList";
import NavButtons from "../../NavButtons/NavButtons";

// Artifacts
import "bootstrap/dist/css/bootstrap.min.css";

// Css
import "./ChooseQuestion.css";

function ChooseQuestion() {
  const questionNumber = useSelector((state) => state.question.questionNumber);
  const path = `/question/${questionNumber}`;
  
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
        returnButton={true}
      ></NavButtons>
    </div>
  );
}

export default ChooseQuestion;
