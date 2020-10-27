import React from 'react';
import TeamIcon from '../TeamIcon/TeamIcon';
import {useSelector} from 'react-redux';

import './AllScores.css'

export default function AllScores(props)
{
    let teams = useSelector(state => state.teamsInfo.teams);
    const isStarted = useSelector(state => state.round.isStarted);

    teams = teams.filter((team) => {
        return (team.name);
    })

    if(!isStarted)
    {
        return (
            <div id="all-scores">
                <h1>Scores</h1>
                <div id="top-other-holder">
                    {teams.map((team, index) => {
                        return (<TeamIcon key={index} name={team.name} roundScore={team.roundScore} score={team.score} placing="top-other"/>)
                    })}
                </div>
            </div>
        );
        
    }

    let teamRanking = teams.sort((teamA, teamB) => teamB.score - teamA.score).map((team, index) => {
        switch(index)
        {
            case 0:
                {
                    return (<TeamIcon key={index} name={team.name} roundScore={team.roundScore} score={team.score} placing="top-1"/>)
                }
            case 1:
            case 2:
                {
                    return (<TeamIcon key={index} name={team.name} roundScore={team.roundScore} score={team.score} placing="top-3"/>)
                }
            default:
                {
                    return (<TeamIcon key={index} name={team.name} roundScore={team.roundScore} score={team.score} placing="top-other"/>)
                }
        }
    });

    const rankingDiv = <div><div id="top-1-holder">{teamRanking[0]}</div><div id="top-3-holder">{teamRanking[1]}{teamRanking[2]}</div></div>
    teamRanking.splice(0,3);

    return(
        <div id="all-scores">
            <h1>Scores</h1>
                {rankingDiv}
            <div id="top-other-holder">
                {teamRanking}
            </div>
        </div>
    )
}