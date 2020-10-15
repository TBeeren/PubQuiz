//React
import React from "react";
import { useSelector } from 'react-redux'

// Components
import TeamApproveList from "../../TeamApproveList/TeamApproveList";
import QuizInformation from "../../QuizInformation/QuizInformation";
import NavButtons from "../../NavButtons/NavButtons";

// Artifacts
import "bootstrap/dist/css/bootstrap.min.css";

// Css
import "./ApproveTeams.css";

function ApproveTeams() {
  const title = useSelector(state => state.quizInfo.quizName)
  const roomId = useSelector(state => state.quizInfo.roomId)
  const description = `Code: ${roomId}`

  return (
    <div>
      <QuizInformation
        title={title}
        description={description}
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
