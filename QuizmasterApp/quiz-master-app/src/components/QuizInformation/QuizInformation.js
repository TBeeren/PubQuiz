//React
import React from "react";

// Artifacts
import "bootstrap/dist/css/bootstrap.min.css";

// Css
import "./QuizInformation.css";

function QuizInformation() {
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-center">
        <h1>Quiz Name</h1>
      </div>
      <div className="d-flex justify-content-center">
        <p> Code: 349321</p>
      </div>
    </div>
  );
}

export default QuizInformation;
