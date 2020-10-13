import React, {useState}  from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './SignUpForm.css'
import {Link} from 'react-router-dom'

export default function SignUpForm(props)
{
    const [teamName, setTeamName] = useState("");
    const [roomId, setRoomId] = useState("");

    const teamNameChangeHandler = (event) =>
    {
        setTeamName(event.target.value);
    }

    const roomIdChangeHandler = (event) =>
    {
        setRoomId(event.target.value);
    }

    const submitHandler = (event) =>
    {
        //event.preventDefault();
        console.log(`Team: ${teamName} signing in to room: ${roomId}`);
    }

    return(
        <div id="signUpForm">
            <h1>Sign Up!</h1>
            <form>
                <div className="form-group center-input">
                    <input type="teamName" value={teamName} onChange={teamNameChangeHandler} className="form-control input-width" placeholder="Team name"/>
                </div>
                <div className="form-group center-input">
                    <input type="roomId" value={roomId} onChange={roomIdChangeHandler} className="form-control input-width" placeholder="Room ID" />
                </div>
                <Link to="/waiting">
                    <button type="submit" onClick={submitHandler} className="btn button-green button-shape">Join Quizz!</button>
                </Link>
            </form>
        </div>
    );
}