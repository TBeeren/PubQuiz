//React
import React from "react";

// Components
import TeamApproveList from "../../TeamApproveList/TeamApproveList";
import QuizInformation from "../../QuizInformation/QuizInformation";
import NavButtons from "../../NavButtons/NavButtons";

// Artifacts
import "bootstrap/dist/css/bootstrap.min.css";

// Css
import "./ApproveTeams.css";

function ApproveTeams() {
  return (
    <div>
      <QuizInformation
        title="Quiz Name"
        description="Code: 318135"
      ></QuizInformation>
      <TeamApproveList></TeamApproveList>
      <NavButtons
        title="Start Quiz?"
        path="/select-categories"
        returnButton={true}
      ></NavButtons>
    </div>
  );
}

export default ApproveTeams;
