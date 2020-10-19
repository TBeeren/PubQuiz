import React from 'react';
import {useSelector} from 'react-redux';
import './Score.css';

export default function Score(props)
{
    const score = useSelector((state) => state.score.teamScore);
    const roundScore = useSelector((state) => state.score.roundScore);

    return(
        <div className="score-container">
            <span className="score">Score: {score}</span>
            <span className="score">Round score: {roundScore}</span>
        </div>
    )
}