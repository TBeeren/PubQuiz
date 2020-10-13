import React from 'react'
import Score from '../../Score/Score'
import SubmitButton from '../../SubmitButton/SubmitButton'
import QuestionSubmitForm from '../../QuestionSubmitForm/QuestionSubmitForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Question.css'

export default function Question(props)
{
    return(
        <div id="question">
                <Score />
                <QuestionSubmitForm />
                <SubmitButton />
        </div>
    );
}   