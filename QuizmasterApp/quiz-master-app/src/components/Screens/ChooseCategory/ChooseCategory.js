//React
import React from "react";
import { useSelector } from "react-redux";

// Components
import QuizInformation from "../../QuizInformation/QuizInformation";
import MultiSelectionList from "../../MultiSelectionList/MultiSelectionList";
import NavButtons from "../../NavButtons/NavButtons";

// Artifacts
import "bootstrap/dist/css/bootstrap.min.css";

// Css
import "./ChooseCategory.css";

function ChooseCategory() {
  const questionNumber = useSelector((state) => state.question.questionNumber);
  const path = `/question/${questionNumber}`;

  return (
    <div>
      <QuizInformation
        title="Choose Categories"
        description="Select three categories"
      ></QuizInformation>
      <MultiSelectionList></MultiSelectionList>
      <NavButtons
        title="Start Questions?"
        path={path}
        returnButton={true}
      ></NavButtons>
    </div>
  );
}

export default ChooseCategory;
