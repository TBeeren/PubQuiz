import React from "react";
import { ProgressBar } from "react-bootstrap";

// Artifacts
import "bootstrap/dist/css/bootstrap.min.css";

export default function RoundProgression(props)
{
    return (<ProgressBar
        className="bar-color"
        variant="progress"
        now={60}
      ></ProgressBar>)
}