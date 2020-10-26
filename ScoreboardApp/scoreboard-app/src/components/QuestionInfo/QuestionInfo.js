import React from 'react'
import { useSelector } from 'react-redux'

export default function QuestionInfo(props)
{
    const category = useSelector(state => state.questionInfo.category);
    const question = useSelector(state => state.questionInfo.question);
    
    return(
        <div id="question-info">
            <h1>{category}</h1>
            <h2>{question}</h2>
        </div>
    )
}