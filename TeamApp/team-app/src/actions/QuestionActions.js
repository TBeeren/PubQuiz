const applicationHost = "http://localhost:3001";

export function AnswerChangeAction(answer)
{
    return {
        type: "ANSWER_CHANGED",
        payload: answer
    }
}

function NewQuestionAction(question, id, number)
{
    return {
        type: "NEW_QUESTION",
        payload: {
            question: question,
            questionId: id,
            questionNumber: number
        }
    }
}

export function fetchNewQuestion(roomId, questionId)
{ 
    return async function(dispatch)
    {
        try
        {
            let response = await fetch(`${applicationHost}/api/v1/games/${roomId}/questions/${questionId}`);
            response = await response.json();
            dispatch(NewQuestionAction(response.question, questionId, response.questionNumber));
        }
        catch(error)
        {
            console.log(error);
        }
    }
}

function AnswerSubmittedAction(answer, answerId)
{
    return {
        type: "ANSWER_SUBMITTED",
        payload: {
            answer: answer,
            answerId: answerId
        }
    }
}

export function submitAnswer(roomId, teamName, questionId, answer, isResubmit = false)
{
    return async function(dispatch)
    {
        try
        {
            let response;
            let body = {
                teamName: teamName,
                answer: answer
            }
            if(!isResubmit)
            {
                response = await fetch(`${applicationHost}/api/v1/games/${roomId}/questions/${questionId}/answer`, {
                    method: "Post",
                    body: JSON.stringify(body),
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
            }
            else
            {
                response = await fetch(`${applicationHost}/api/v1/games/${roomId}/questions/${questionId}/answer`, {
                    method: "Put",
                    body: JSON.stringify(body),
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
            }
            response = await response.json();
            dispatch(AnswerSubmittedAction(answer, response.answerId));
        }
        catch(error)
        {
            console.log(error);
        }
    }
}

function AnswerReceivedAction(answer, isCorrect)
{
    return {
        type: "ANSWER_RECEIVED",
        payload: {
            answer: answer,
            isCorrect: isCorrect
        }
    }
}

export function validateAnswer(roomId, questionId, teamName)
{
    return async function(dispatch)
    {
        try
        {
            let response = await fetch(`${applicationHost}/api/v1/games/${roomId}/questions/${questionId}/answers/${teamName}`);
            response = await response.json();
            dispatch(AnswerReceivedAction(response.answer, response.isCorrect));
        }
        catch(error)
        {
            console.log(error);
        }
    }
}

export function isResubmitAction(isResubmit)
{
    return({
        type: "SET_RESUBMIT",
        payload: isResubmit
    })
}