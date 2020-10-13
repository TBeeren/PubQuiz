import React from 'react'
import './WaitingClock.css'
import 'bootstrap/dist/css/bootstrap.min.css'; 

export default function WaitingClock(props)
{
    return(
        <div id="waiting-clock">
            <h1 id="title">Waiting for Quizmaster...</h1>
            <div className="spinner-grow spinner-size" role="status">
                <span className="sr-only">Approving...</span>
            </div>
        </div>
    );
}