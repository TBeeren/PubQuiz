// React
import React from "react";

// Components
import Selection from "../Selection/Selection";

// Artifacts
import "bootstrap/dist/css/bootstrap.min.css";

// Css
import "./SelectionList.css";

function SelectionList(props) {

  if(props.mode === "category"){
    return (
      <div className="container mt-5">
        <Selection value="Dieren"></Selection>
        <Selection value="Sport"></Selection>
        <Selection value="Politiek"></Selection>
      </div>
    );
  } else if (props.mode === "question"){
    return (
      <div className="container mt-5">
        <Selection value="Vraag 1"></Selection>
        <Selection value="Vraag 2"></Selection>
        <Selection value="Vraag 3"></Selection>
      </div>
    );
  }
}

export default SelectionList;
