import React from 'react';
import {useSelector} from 'react-redux';
import './QuestionAnswerInfo.css';

export default function QuestionAnswerInfo(props)
{
    const question = useSelector((state) => state.questionInfo.question);
    const answer = useSelector((state) => state.questionInfo.teamAnswer);
    return(
        <div id="question-answer-info">
            <div id="circle-bg" className="pending">
                <h3>{question}</h3>
                <h1>{answer}</h1>
            </div>
        </div>
    );
}