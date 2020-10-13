// React
import React from "react";
import {
  Link
} from "react-router-dom";

// Components

// Artifacts
import "bootstrap/dist/css/bootstrap.min.css";
import "./CreateQuiz.css";

function CreateQuiz() {
  return (
      <div className="d-flex justify-content-center align-center">
        <div className="col-md-9 col-sm-9 mt-5">
          <form >
            <input
              type="text"
              className="form-control form-size mb-5 align-middle"
              id="inputQuizName"
              placeholder="Quiz Name"
            />
            <Link to="/approve-teams" className="d-flex justify-content-center mb-5">
              <button type="submit" className="btn btn-primary form-size mb-2 button-color button-width">
                Create Quiz
              </button>
            </Link>
          </form>
        </div>
      </div>
  );
}

export default CreateQuiz;
