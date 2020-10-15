// React
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// Components
import Selection from "../Selection/Selection";

// Artifacts
import "bootstrap/dist/css/bootstrap.min.css";

// Css
import "./MultiSelectionList.css";

function MultiSelectionList(props) {
  const nSelections = 5;
  const questions = useSelector((state) => state.question.questions);
  const [buttons, setButtons] = useState([false, false, false, false, false]);

  useEffect(() => {
    for (var i = 0; i < nSelections; i++) {
      try {
        if (buttons[i]) {
          document.getElementById(i).classList.add("selected");
        } else {
          document.getElementById(i).classList.remove("selected");
        }
      } catch (e) {
        console.log(
          "Warning! The application requires 5 selections in the list"
        );
      }
    }
  });

  function clickHandler(i) {
    let tempArray = [];
    for (var j = 0; j < nSelections; j++) {
      i === j ? tempArray.push(true) : tempArray.push(false);
    }
    setButtons(tempArray);
  }

  return (
    <div className="container mt-5">
      {questions.map(function (item, i) {
        if (item !== null && i < nSelections) {
          return (
            <Selection
              callback={clickHandler}
              key={i}
              propId={i}
              value={item}
            ></Selection>
          );
        }
      })}
    </div>
  );
}

export default MultiSelectionList;