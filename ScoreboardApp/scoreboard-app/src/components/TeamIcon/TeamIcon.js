//React
import React from "react";

// Artifacts
import "bootstrap/dist/css/bootstrap.min.css";

// Css
import "./TeamIcon.css";

function TeamIcon(props) {
  let cssClasses = `btn btn-color btn-circle btn-xl intermission-team-icon ${props.placing}`
  let toRender;
  if(props.answer)
  {
    if(props.correct)
    {
      cssClasses = `${cssClasses} answer-correct`;
    }
    else{
      cssClasses = `${cssClasses} answer-false`;
    }
    toRender = (
      <button type="button" className={cssClasses}>
          <span className="icon-team-name ">{props.name}</span>
          <span className="icon-score">{props.answer}</span>
        </button>)
  }
  else{
    toRender = (
    <button type="button" className={cssClasses}>
        <span className="icon-team-name ">{props.name}</span>
        <span className="icon-score">score: {props.score}</span>
        <span className="icon-score">round score: {props.roundScore}</span>
      </button>)
  }
  return (
      toRender
  );
}

export default TeamIcon;