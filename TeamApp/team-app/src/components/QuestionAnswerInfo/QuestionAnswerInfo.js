import React from 'react';
import {useSelector} from 'react-redux';
import './QuestionAnswerInfo.css';

export default function QuestionAnswerInfo(props)
{
    const question = useSelector((state) => state.questionInfo.question);
    const answer = useSelector((state) => state.questionInfo.teamAnswer);
    const answerState = useSelector((state) => state.questionInfo.isCorrect);
    const correctAnswer= useSelector((state) => state.questionInfo.correctAnswer);

    return(
        <div id="question-answer-info">
            <div id="circle-bg" className={answerState}>
                <h3>{question}</h3>
                <h1 className={answerState === "incorrect" ? "line-through" : ""}>{answer}</h1>
                {correctAnswer ? <h1 className={answerState === "incorrect" ? "show" : "hidden"}>{correctAnswer}</h1>: ""}
            </div>
        </div>
    );
}