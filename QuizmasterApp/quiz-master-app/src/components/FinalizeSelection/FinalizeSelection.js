// React
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

// Components
import { addQuestionAction } from "../../actions/QuestionActions";

// Artifacts
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
// Css
import "./FinalizeSelection.css";

function FinalizeSelection(props) {
  const nSelections = 2;
  const questions = ["Start new round", "End Quiz"];
  const [buttons, setButtons] = useState([false, false]);
  const dispatch = useDispatch();

  useEffect(() => {
    for (var i = 0; i < buttons.length; i++) {
      try {
        if (buttons[i]) {
          document.getElementById(i).classList.add("selected");
        } else {
          document.getElementById(i).classList.remove("selected");
        }
      } catch (e) {
        // Only for development purposes.
        // console.log(
        //   "Warning! The application requires 5 selections in the list"
        // );
      }
    }
  });

  function clickHandler(i) {
    let tempArray = [];
    let questionArray = [];
    for (var j = 0; j < nSelections; j++) {
      if (i === j) {
        tempArray.push(true);
        questionArray.push(questions[j]);
      } else {
        tempArray.push(false);
      }
    }
    tempArray[0] ? props.callback(false) : props.callback(true);
    setButtons(tempArray);
  }

  return (
    <div className="div-content d-flex justify-content-center">
      <div className="row">
        {questions.map(function (item, i) {
          if (item !== null && i < nSelections) {
            return (
              <button
                id={i}
                type="button"
                className="btn selection-color btn-circle btn-circle-size"
                onClick={() => clickHandler(i)}
              >
                {item}
              </button>
            );
          }
        })}
      </div>
    </div>
  );
}

export default FinalizeSelection;
