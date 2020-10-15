//React
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Components
import QuizInformation from "../../QuizInformation/QuizInformation";
import MultiSelectionList from "../../MultiSelectionList/MultiSelectionList";
import NavButtons from "../../NavButtons/NavButtons";
import { fetchCategories } from '../../../actions/AnswerActions';

// Artifacts
import "bootstrap/dist/css/bootstrap.min.css";

// Css
import "./ChooseCategory.css";

function ChooseCategory() {
  const questionNumber = useSelector((state) => state.question.questionNumber);
  const roomId = useSelector((state) => state.quizInfo.roomId)
  const path = `/question/${questionNumber}`;
  
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchCategories(roomId));
  });

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
        returnButton={false}
      ></NavButtons>
    </div>
  );
}

export default ChooseCategory;
