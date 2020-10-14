const applicationHost = "http://localhost:3001";

function NewQuestionAction(question, number)
{
    return {
        type: "NEW_QUESTION",
        payload: {
            question: question,
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
            dispatch(NewQuestionAction(response.question, response.questionNumber));
        }
        catch(error)
        {
            console.log(error);
        }
    }
}

export function AnswerSubmittedAction(answer)
{
    return {
        type: "ANSWER_SUBMITTED",
        payload: answer
    }
}

export function AnswerReceivedAction(answer)
{
    return {
        type: "ANSWER_RECEIVED",
        payload: answer
    }
}