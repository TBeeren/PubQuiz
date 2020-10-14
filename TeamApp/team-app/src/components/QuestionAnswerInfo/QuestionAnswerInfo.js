import React from 'react'
import './QuestionAnswerInfo.css'

export default function QuestionAnswerInfo(props)
{
    return(
        <div id="question-answer-info">
            <div id="circle-bg" className="pending">
                <h3>Hoeveel tenen heeft Donald Trump op zondagmorgen?</h3>
                <h1>39</h1>
            </div>
        </div>
    );
}