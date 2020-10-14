import React, {useState}  from 'react'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'

import {signUpAction} from '../../actions/SignUpActions'

import 'bootstrap/dist/css/bootstrap.min.css'
import './SignUpForm.css'

export default function SignUpForm(props)
{
    const [teamName, setTeamName] = useState("");
    const [roomId, setRoomId] = useState("");
    const dispatch = useDispatch();

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
        dispatch(signUpAction(teamName, roomId));
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
                <Link to="/question">
                    <button type="submit" onClick={submitHandler} className="btn button-green button-shape">Join Quizz!</button>
                </Link>
            </form>
        </div>
    );
}