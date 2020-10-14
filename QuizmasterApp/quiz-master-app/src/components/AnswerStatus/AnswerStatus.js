//React
import React from "react";

// Components
import TeamAnswer from "../TeamAnswer/TeamAnswer";
import QuestionModal from "../QuestionModal/QuestionModal";

// Artifacts
import "bootstrap/dist/css/bootstrap.min.css";

// Css
import "./AnswerStatus.css";

function AnswerStatus() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <QuestionModal
        show={modalShow}
        teamName="Team"
        answer="elf"
        correct="11"
        onHide={() => setModalShow(false)}
        onApprove={() => console.log("Antwoord is goed")}
      />
      <div className="div-content d-flex justify-content-center">
        <div className="row">
          <div onClick={() => setModalShow(true)}>
            <TeamAnswer></TeamAnswer>
          </div>
          <div onClick={() => setModalShow(true)}>
            <TeamAnswer></TeamAnswer>
          </div>
          <div onClick={() => setModalShow(true)}>
            <TeamAnswer></TeamAnswer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnswerStatus;
