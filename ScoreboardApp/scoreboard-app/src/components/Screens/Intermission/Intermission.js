import React from 'react';
import AllScores from '../../AllScores/AllScores'
import Round from '../../Round/Round'
import RoundProgression from '../../RoundProgression/RoundProgression'

import './Intermission.css'

export default function Intermission(props){
    return(
        <div id="intermission-screen">
            <Round />
            <AllScores />
            <RoundProgression />
        </div>
    )
}