import React, {useState}  from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useStore} from 'react-redux'

import {signUp} from '../../actions/SignUpActions'

import 'bootstrap/dist/css/bootstrap.min.css'
import './SignUpForm.css'

export default function SignUpForm(props)
{
    const [teamName, setTeamName] = useState("");
    const [roomId, setRoomId] = useState("");
    const store = useStore();
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
        dispatch(signUp(store, props.history, teamName, roomId));
    }

    return(
        <div id="signUpForm">
            <h1>Sign Up!</h1>
            <form>
                <div className="form-group center-input">
                    <input type="teamName" value={teamName} maxLength={8} onChange={teamNameChangeHandler} className="form-control input-width" placeholder="Team name"/>
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