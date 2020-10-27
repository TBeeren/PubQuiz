import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useStore } from "react-redux";

import { signUp } from "../../actions/SignUpActions";

import 'bootstrap/dist/css/bootstrap.min.css'
import './SignUpForm.css'

export default function SignUpForm(props) {
  const [teamName, setTeamName] = useState("");
  const [roomId, setRoomId] = useState("");
  const store = useStore();
  const dispatch = useDispatch();

  const teamNameChangeHandler = (event) => {
    try {
      if (event.target.value.length == 0 || event.target.value.length > 8) {
        document.getElementById("submitButton").disabled = true;
      } else if (document.getElementById("roomIdInput").value.length == 0) {
        document.getElementById("submitButton").disabled = true;
      } else {
        document.getElementById("submitButton").disabled = false;
      }
    } catch (e) {
      console.log("Please enter a teamname");
    }
    setTeamName(event.target.value);
  };

  const roomIdChangeHandler = (event) => {
    try {
      if (event.target.value.length == 0 || event.target.value.length > 8) {
        document.getElementById("submitButton").disabled = true;
      } else if (document.getElementById("teamNameInput").value.length == 0) {
        document.getElementById("submitButton").disabled = true;
      } else {
        document.getElementById("submitButton").disabled = false;
      }
    } catch (e) {
      console.log("Please enter a teamname");
    }
    setRoomId(event.target.value);
  };

    const submitHandler = (event) =>
    {
        dispatch(signUp(store, props.history, teamName, roomId));
    }

  useEffect(() => {
    document.getElementById("submitButton").disabled = true;
  }, [false]);

  return (
    <div id="signUpForm">
      <h1>Sign Up!</h1>
      <form>
        <div className="form-group center-input">
          <input
            type="teamName"
            id="teamNameInput"
            value={teamName}
            maxLength={8}
            onChange={teamNameChangeHandler}
            className="form-control input-width"
            placeholder="Team name"
          />
        </div>
        <div className="form-group center-input">
          <input
            type="roomId"
            id="roomIdInput"
            value={roomId}
            onChange={roomIdChangeHandler}
            className="form-control input-width"
            placeholder="Room ID"
          />
        </div>
        <Link to="/waiting">
          <button
            id="submitButton"
            type="submit"
            onClick={submitHandler}
            className="btn button-green button-shape"
          >
            Join Quizz!
          </button>
        </Link>
      </form>
    </div>
  );
}
