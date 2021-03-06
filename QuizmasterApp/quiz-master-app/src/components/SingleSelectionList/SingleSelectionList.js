// React
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// Components
import Selection from "../Selection/Selection";
import {
  addQuestionAction,
} from "../../actions/QuestionActions";

// Artifacts
import "bootstrap/dist/css/bootstrap.min.css";
// Css
import "./SingleSelectionList.css";

function SingleSelectionList(props) {
  const nSelections = 5;
  let questions = useSelector((state) => state.question.questions);
  const [buttons, setButtons] = useState([false, false, false, false, false]);
  const dispatch = useDispatch();

  questions = questions.filter((question, i) => {
    return (question !== null && i < nSelections);
  });

  useEffect(() => {
    for (var i = 0; i < buttons.length; i++) {
      try {
        if (buttons[i]) {
          document.getElementById(i).classList.add("selected");
        } else {
          document.getElementById(i).classList.remove("selected");
        }
      } catch (e) {
        //Not handling, only served warnings.
      }
    }
  });

  function clickHandler(i) {
    let tempArray = [];
    let questionArray = []
    for (var j = 0; j < nSelections; j++) {
      if (i === j) {
        tempArray.push(true);
        questionArray.push(questions[j])
      } else {
        tempArray.push(false);
      }
    }
    try {
      if(!tempArray.length){
        document.getElementById('NavButtons').style.display = "none";
      } else {
        document.getElementById('NavButtons').style.display = "inline";
      }
    } catch(e){
  }
    setButtons(tempArray);
    dispatch(addQuestionAction(questionArray[0]));
  }

  return (
    <div className="container mt-5">
      {questions.map(function (item, i) {
          return (
            <Selection
              callback={clickHandler}
              key={i}
              propId={i}
              value={item.question}
            ></Selection>
          );
      })}
    </div>
  );
}

export default SingleSelectionList;
