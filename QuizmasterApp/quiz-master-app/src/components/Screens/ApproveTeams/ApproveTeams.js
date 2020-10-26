//React
import React, { useEffect } from "react";
import { useSelector, useDispatch, useStore} from 'react-redux'

// Components
import TeamApproveList from "../../TeamApproveList/TeamApproveList";
import QuizInformation from "../../QuizInformation/QuizInformation";
import NavButtons from "../../NavButtons/NavButtons";
import { startQuiz } from "../../../actions/QuizActions";
import { openSocket } from '../../../websocket';

// Artifacts
import "bootstrap/dist/css/bootstrap.min.css";

// Css
import "./ApproveTeams.css";

function ApproveTeams() {
  const dispatch = useDispatch();
  const title = useSelector(state => state.quizInfo.quizName)
  const roomId = useSelector(state => state.quizInfo.roomId)
  const store = useStore();
  const description = `Code: ${roomId}`

  const onStartQuiz = () => {
    dispatch(startQuiz(roomId, true));
  }; 

  const onStopQuiz = () => {
    dispatch(startQuiz(roomId, false));
  };

  useEffect(() => {
    openSocket(store, roomId);
  });
  
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
