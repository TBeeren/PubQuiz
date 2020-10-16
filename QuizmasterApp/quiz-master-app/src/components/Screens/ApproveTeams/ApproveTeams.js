//React
import React from "react";
import { useSelector, useDispatch } from 'react-redux'

// Components
import TeamApproveList from "../../TeamApproveList/TeamApproveList";
import QuizInformation from "../../QuizInformation/QuizInformation";
import NavButtons from "../../NavButtons/NavButtons";
import { startQuiz } from "../../../actions/QuizActions";

// Artifacts
import "bootstrap/dist/css/bootstrap.min.css";

// Css
import "./ApproveTeams.css";

function ApproveTeams() {
  const dispatch = useDispatch();
  const title = useSelector(state => state.quizInfo.quizName)
  const roomId = useSelector(state => state.quizInfo.roomId)
  const description = `Code: ${roomId}`

  const onStartQuiz = () => {
    dispatch(startQuiz(roomId, true));
  }; 

  const onStopQuiz = () => {
    dispatch(startQuiz(roomId, false));
  };
  
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
        callback={() => onStartQuiz()}
      ></NavButtons>
    </div>
  );
}

export default ApproveTeams;
