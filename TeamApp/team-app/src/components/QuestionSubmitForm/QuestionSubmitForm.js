import React, {useState, useEffect} from 'react';

import {useSelector, useDispatch} from 'react-redux';

import './QuestionSubmitForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {fetchNewQuestion} from '../../actions/QuestionActions';

export default function QuestionSubmitForm(props)
{
    const [answer, setAnswer] = useState("");
    const question = useSelector(state => state.questionInfo.question);

    //placeholder till the server van ping
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNewQuestion(100, 1));
    });

    const answerChangeHandler = (event) => {
        setAnswer(event.target.value);
    } 

    return(
        <div id="question-submit-form">
            <h2>{question}</h2>
            <form>
                <div className="form-group center-input">
                    <input type="answer" value={answer} onChange={answerChangeHandler} className="form-control input-width" placeholder="Answer"/>
                </div>
            </form>
        </div>
    )
}