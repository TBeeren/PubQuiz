// React
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { createQuiz } from "../../actions/QuizActions";

// Components

// Artifacts
import "bootstrap/dist/css/bootstrap.min.css";
import "./CreateQuiz.css";

function CreateQuiz() {
  const [quizName, setQuizName] = useState("");
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setQuizName(e.target.value);
  };

  const submitHandler = (e) => {
    dispatch(createQuiz(quizName));
  };

  return (
    <div className="d-flex justify-content-center align-center">
      <div className="col-md-9 col-sm-9 mt-5">
        <form>
          <input
            type="text"
            className="form-control form-size mb-5 align-middle"
            id="inputQuizName"
            placeholder="Quiz Name"
            value={quizName}
            onChange={inputHandler}
          />
          <Link
            to="/approve-teams"
            className="d-flex justify-content-center mb-5"
          >
            <button
              type="submit"
              onClick={submitHandler}
              className="btn btn-primary form-size mb-2 button-color button-width"
            >
              Create Quiz
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default CreateQuiz;
