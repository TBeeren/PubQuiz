import React, {useState} from 'react'
import './QuestionSubmitForm.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function QuestionSubmitForm(props)
{
    const [answer, setAnswer] = useState("");

    const answerChangeHandler = (event) => {
        setAnswer(event.target.value);
    } 

    return(
        <div id="question-submit-form">
            <h2>Hoeveel tenen heeft Donald Trump op zondagmorgen?</h2>
            <form>
                <div className="form-group center-input">
                    <input type="answer" value={answer} onChange={answerChangeHandler} className="form-control input-width" placeholder="Answer"/>
                </div>
            </form>
        </div>
    )
}