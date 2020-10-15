//React
import React from "react";

// Artifacts
import "bootstrap/dist/css/bootstrap.min.css";
// Css
import "./QuizInformation.css";

function QuizInformation(props) {
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-center">
        <h1>{props.title}</h1>
      </div>
      <div className="d-flex justify-content-center">
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default QuizInformation;
