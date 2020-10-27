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
  let categories = useSelector((state) => state.quizInfo.categories);

  const shuffleArray = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  categories = categories.filter((category, i) => {
    return (category !== null && i < nSelections);
  });

  shuffleArray(categories);

  useEffect(() => {
    for (var i = 0; i < nSelections; i++) {
      try {
        if (props.buttons[i]) {
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
    props.buttons.forEach((i)=> {
      tempArray.push(i);
    })
    tempArray[i] = !tempArray[i];
    props.onSetButtons(tempArray);
  }

  return (
    <div className="container mt-5">
      {categories.map(function (item, i) {
          return (
            <Selection
              callback={clickHandler}
              key={i}
              propId={i}
              value={item}
            ></Selection>
          );
      })}
    </div>
  );
}

export default MultiSelectionList;