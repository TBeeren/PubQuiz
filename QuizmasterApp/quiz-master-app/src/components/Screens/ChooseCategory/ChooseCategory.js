//React
import React from "react";

// Components

// Artifacts
import "bootstrap/dist/css/bootstrap.min.css";
import QuizInformation from "../../QuizInformation/QuizInformation";
import SelectionList from "../../SelectionList/SelectionList";
import NavButtons from "../../NavButtons/NavButtons";

// Css
import "./ChooseCategory.css";

function ChooseCategory() {
  const questionNumber = 1;
  const path = `/question/${questionNumber}`;
  
  return (
    <div>
      <QuizInformation
        title="Quiz Name"
        description="Select three categories"
      ></QuizInformation>
      <SelectionList
        mode="category"></SelectionList>
      <NavButtons
        title="Start Questions?"
        path={path}
        returnButton={true}
      ></NavButtons>
    </div>
  );
}

export default ChooseCategory;
