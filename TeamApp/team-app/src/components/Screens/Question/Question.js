import React from 'react';
import {useSelector} from 'react-redux';

import Score from '../../Score/Score';
import SubmitButton from '../../SubmitButton/SubmitButton';
import QuestionSubmitForm from '../../QuestionSubmitForm/QuestionSubmitForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Question.css'

export default function Question(props)
{
    const teamName = useSelector((state) => { return state.team.teamName;});
    console.log(teamName);
    return(
        <div id="question">
                <h1>{teamName}</h1>
                <Score />
                <QuestionSubmitForm />
                <SubmitButton />
        </div>
    );
}   