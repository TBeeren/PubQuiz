//React
import React from "react";
import { Modal } from "react-bootstrap";

// Artifacts
import "bootstrap/dist/css/bootstrap.min.css";

// Css
import "./KickModal.css";

function KickModal(props) {
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
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="text-center w-100 text-adjustments"
        >
          Kick Team? 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-md-6 col-lg-6 col-sm-6">
            <button onClick={props.onHide} className="btn btn-reject"></button>
          </div>
          <div className="col-md-6 col-lg-6 col-sm-6">
              <button
                onClick={props.onKick}
                className="btn btn-approve"
              ></button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default KickModal;