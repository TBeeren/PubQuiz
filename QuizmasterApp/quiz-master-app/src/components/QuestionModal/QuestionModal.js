//React
import React from "react";
import { Modal } from "react-bootstrap";

// Artifacts
import "bootstrap/dist/css/bootstrap.min.css";

// Css
import "./QuestionModal.css";

function QuestionModal(props) {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-style"
    >
      <Modal.Header className="text-center">
        <div className="row full-width">
          <h1 id="contained-modal-title-vcenter" className="text-center w-100 text-adjustments"> {props.teamName} </h1>
          <p className="text-center w-100 margin-none">Answer: {props.answer}</p>
          <p className="text-center w-100 margin-none">Correct: {props.correct}</p>
        </div>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-md-6 col-lg-6 col-sm-6">
            <button onClick={props.onHide} className="btn btn-reject"></button>
          </div>
          <div className="col-md-6 col-lg-6 col-sm-6">
            <button
              onClick={() => { 
                props.onApprove()
                props.onHide()
              }}
              className="btn btn-approve"
            ></button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default QuestionModal;
