import React from 'react';
import TeamIcon from '../TeamIcon/TeamIcon';
import {useSelector} from 'react-redux';

import './AllAnswers.css'

export default function AllAnswers(props)
{
    const answeredTeams = useSelector((state) => state.teamsInfo.answeredTeams);

    let teamAnswers = answeredTeams.map((team, index) => {
        return <TeamIcon key={index} name={team.teamName} answer={team.text} correct={team.isCorrect}/>
    });

    return(
        <div id="all-scores">
            <h1>Answers</h1>
                {teamAnswers}
        </div>
    )
}