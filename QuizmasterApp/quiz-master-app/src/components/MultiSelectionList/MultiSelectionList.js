// React
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

// Components
import Selection from "../Selection/Selection";

// Artifacts
import "bootstrap/dist/css/bootstrap.min.css";

// Css
import "./MultiSelectionList.css";

function MultiSelectionList(props) {
  const nSelections = 5;
  const categories = useSelector((state) => state.quizInfo.categories);

  useEffect(() => {
    for (var i = 0; i < nSelections; i++) {
      try {
        if (props.buttons[i]) {
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
    props.buttons.forEach((i)=> {
      tempArray.push(i);
    })
    tempArray[i] = !tempArray[i];
    props.onSetButtons(tempArray);
  }

  return (
    <div className="container mt-5">
      {categories.map(function (item, i) {
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