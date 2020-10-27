// React
import React, { useEffect, useState } from "react";

// Artifacts
import "bootstrap/dist/css/bootstrap.min.css";
// Css
import "./FinalizeSelection.css";

function FinalizeSelection(props) {
  const nSelections = 2;
  let questions = ["Start new round", "End Quiz"];
  const [buttons, setButtons] = useState([false, false]);
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
            return (
              <button
                key={i}
                id={i}
                type="button"
                className="btn selection-color btn-circle btn-circle-size"
                onClick={() => clickHandler(i)}
              >
                {item}
              </button>
            );
        })}
      </div>
    </div>
  );
}

export default FinalizeSelection;
