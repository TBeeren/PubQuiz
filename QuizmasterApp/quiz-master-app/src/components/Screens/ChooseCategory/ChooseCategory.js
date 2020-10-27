//React
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// Components
import QuizInformation from "../../QuizInformation/QuizInformation";
import MultiSelectionList from "../../MultiSelectionList/MultiSelectionList";
import NavButtons from "../../NavButtons/NavButtons";
import { fetchCategories } from "../../../actions/QuizActions";
import { newRound, UpdateQuestionAction } from "../../../actions/RoundActions";

// Artifacts
import "bootstrap/dist/css/bootstrap.min.css";

// Css
import "./ChooseCategory.css";

function ChooseCategory() {
  const categories = useSelector((state) => state.quizInfo.categories);
  const [buttons, setButtons] = useState([false, false, false, false, false]);
  const roomId = useSelector(state => state.quizInfo.roomId);
  const roundNumber = useSelector((state) => state.round.roundNumber);
  const path = `/select-question`;

  const dispatch = useDispatch();

  const onSetButtons = (array) => {
    setButtons(array);
  };

  const onNewRound = () => {
    let tempArray = [];
    buttons.forEach((item, i) => {
      if (item) {
        tempArray.push(categories[i]);
      }
    });
    dispatch(newRound(roomId, roundNumber + 1, tempArray));
  };

  useEffect(() => {
    //DIKKE VETTE TODO
    dispatch(UpdateQuestionAction(11));
    dispatch(fetchCategories(roomId));
  }, [dispatch, roomId]);

  return (
    <div>
      <QuizInformation
        title="Choose Categories"
        description="Select three categories"
      ></QuizInformation>
      <MultiSelectionList
        buttons={buttons}
        onSetButtons={onSetButtons}
      ></MultiSelectionList>
      <NavButtons
        title="Start Questions?"
        path={path}
        returnButton={false}
        callback={onNewRound}
      ></NavButtons>
    </div>
  );
}

export default ChooseCategory;
