import React from 'react';
import AllAnswers from '../../AllAnswers/AllAnswers'
import Round from '../../Round/Round'
import RoundProgression from '../../RoundProgression/RoundProgression'

import './AnswersShowing.css'

export default function AnswersShowing(props){
    return(
        <div id="intermission-screen">
            <Round />
            <AllAnswers />
            <RoundProgression />
        </div>
    )
}