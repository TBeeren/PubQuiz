import React from "react";
import { useSelector } from "react-redux";
import { ProgressBar } from "react-bootstrap";

// Artifacts
import "bootstrap/dist/css/bootstrap.min.css";

export default function RoundProgression(props) {
  const questionNumber = useSelector(
    (state) => state.questionInfo.questionNumber
  );
  const percentage = (100 / 12) * questionNumber;

  return (
    <ProgressBar
      className="bar-color"
      variant="progress"
      now={percentage}
    ></ProgressBar>
  );
}
