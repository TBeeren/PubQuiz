import React from 'react';
import Score from '../../Score/Score';
import ResubmitButton from '../../ResubmitButton/ResubmitButton'
import QuestionAnswerInfo from '../../QuestionAnswerInfo/QuestionAnswerInfo';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Answer.css'

export default function Answer(props)
{
    return(
        <div id="answer">
                <Score />
                <QuestionAnswerInfo />
                <ResubmitButton history={props.history} />
        </div>
    );
}   