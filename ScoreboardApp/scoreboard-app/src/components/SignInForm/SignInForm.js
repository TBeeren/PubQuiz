import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useStore, useDispatch } from "react-redux";
import { roomIdAction } from "../../actions/SignInActions";
import { fetchScores } from "../../actions/TeamsActions";

import "bootstrap/dist/css/bootstrap.min.css";
import "./SignInForm.css";
import { openSocket } from "../../websocket";

export default function SignUpForm(props) {
  const [roomId, setRoomId] = useState("");
  const store = useStore();
  const dispatch = useDispatch();

  const roomIdChangeHandler = (event) => {
    try {
        if (event.target.value.length == 0 || event.target.value.length > 8) {
          document.getElementById("submitButton").disabled = true;
        } else {
          document.getElementById("submitButton").disabled = false;
        }
      } catch (e) {
        console.log("Please enter a teamname");
      }
    setRoomId(event.target.value);
  };

  const submitHandler = (event) => {
    props.audioCallback();
    dispatch(roomIdAction(roomId));
    dispatch(fetchScores(roomId));
    openSocket(store, props.history, roomId);
  };

  useEffect(() => {
    document.getElementById("submitButton").disabled = true;
  }, [false]);

  return (
    <div id="signUpForm">
      <h1>Sign In!</h1>
      <form>
        <div className="form-group center-input">
          <input
            type="roomId"
            id="roomIdInput"
            value={roomId}
            maxLength={8}
            onChange={roomIdChangeHandler}
            className="form-control input-width"
            placeholder="Room ID"
          />
        </div>
        <Link to="/intermission">
          <button
            type="submit"
            id="submitButton"
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
