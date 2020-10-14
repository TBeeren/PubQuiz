//React
import React from "react";

// Components
import QuizInformation from "../../QuizInformation/QuizInformation";
import SelectionList from "../../SelectionList/SelectionList";
import NavButtons from "../../NavButtons/NavButtons";

// Artifacts
import "bootstrap/dist/css/bootstrap.min.css";

// Css
import "./ChooseQuestion.css";

function ChooseQuestion() {
  const questionNumber = 1;
  const path = `/question/${questionNumber}`;
  
  return (
    <div>
      <QuizInformation
        title="Quiz Name"
        description="Select the next Question"
      ></QuizInformation>
      <SelectionList
        mode="question"></SelectionList>
      <NavButtons
        title="Start Question?"
        path={path}
        returnButton={true}
      ></NavButtons>
    </div>
  );
}

export default ChooseQuestion;
