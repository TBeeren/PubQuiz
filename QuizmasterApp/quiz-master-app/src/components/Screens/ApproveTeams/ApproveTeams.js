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
      <QuizInformation></QuizInformation>
      <TeamApproveList></TeamApproveList>
      <NavButtons></NavButtons>
    </div>
  );
}

export default ApproveTeams;
