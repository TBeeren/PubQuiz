//React
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { approveAnswer } from "../../actions/AnswerActions"

// Component
import QuestionModal from "../QuestionModal/QuestionModal";

// Artifacts
import "bootstrap/dist/css/bootstrap.min.css";

// Css
import "./TeamAnswer.css";

function TeamAnswer(props) {
  const [modalShow, setModalShow] = React.useState(false);
  const dispatch = useDispatch();
  const currentQuestionId = useSelector(state => state.question.questionNumber);
  const roomId = useSelector(state => state.quizInfo.roomId);

  useEffect(() => {
    if(!props.correctness) {
      document.getElementById(props.name).classList.add('btn-color-wrong');
    } else {
      document.getElementById(props.name).classList.remove('btn-color-wrong');
    }
  });

  return (
    <div>
      <QuestionModal
        show={modalShow}
        teamName={props.name}
        answer={props.answer}
        correct={props.correct}
        onHide={() => setModalShow(false)}
        onApprove={() => dispatch(approveAnswer(roomId, props.name ,currentQuestionId, true))}
      />
      <button
        id={props.name}
        type="button"
        className="btn btn-color btn-circle btn-xl btn-font"
        onClick={() => setModalShow(true)}
      >
        {props.name}
      </button>
    </div>
  );
}

export default TeamAnswer;
