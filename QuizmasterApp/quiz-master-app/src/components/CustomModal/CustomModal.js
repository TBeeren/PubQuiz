//React
import React from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

// Artifacts
import "bootstrap/dist/css/bootstrap.min.css";
// Css
import "./CustomModal.css";

function CustomModal(props) {

  const submitHandler = () => {
    props.onHide();
    try{
      props.callback();
    } catch (e){
      // Not handling
    }
  }

  return (
    <Modal
      {...props}
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
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-md-6 col-lg-6 col-sm-6">
            <button onClick={props.onHide} className="btn btn-reject"></button>
          </div>
          <div className="col-md-6 col-lg-6 col-sm-6">
            <Link
              to={props.path}
              className="d-flex justify-content-center"
            >
              <button
                onClick={() => submitHandler()}
                className="btn btn-approve"
              ></button>
            </Link>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default CustomModal;
