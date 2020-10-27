import React from 'react';

import {useSelector, useDispatch} from 'react-redux';

import './QuestionSubmitForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AnswerChangeAction} from '../../actions/QuestionActions';

export default function QuestionSubmitForm(props)
{
    const question = useSelector(state => state.questionInfo.question);

    const answer = useSelector(state => state.questionInfo.teamAnswer);
    const dispatch = useDispatch();
    
    const answerChangeHandler = (event) => {
        dispatch(AnswerChangeAction(event.target.value));
    } 

    const keyDownHandler = (event) => {
        if(event.keyCode === 13)
        {
            event.preventDefault();
            
        }
    }

    return(
        <div id="question-submit-form">
            <h2>{question}</h2>
            <form>
                <div className="form-group center-input">
                    <input type="answer" value={answer} onChange={answerChangeHandler} onKeyDown={keyDownHandler} className="form-control input-width" placeholder="Answer"/>
                </div>
            </form>
        </div>
    )
}