import React from 'react'
import AnswerStatus from '../../AnswerStatus/AnswerStatus'
import Round from '../../Round/Round'
import QuestionInfo from '../../QuestionInfo/QuestionInfo'
import RoundProgression from '../../RoundProgression/RoundProgression'

export default function QuestionOngoing(props)
{
    return(
        <div id="question-ongoing">
            <Round />
            <QuestionInfo />
            <AnswerStatus />
            <RoundProgression />
        </div>  
    )
}