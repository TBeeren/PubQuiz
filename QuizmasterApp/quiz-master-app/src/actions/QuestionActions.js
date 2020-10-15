const applicationHost = "http://localhost:3001";

export function NextQuestionAction(number)
{
    return {
        type: "NEXT_QUESTION",
        payload: {
            questionNumber: number
        }
    }
}

export function NewQuestionAction(question, number)
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

export function fetchQuestions(roomId)
{
    return async function(dispatch)
    {
        try
        {
            let response = await fetch(`${applicationHost}/api/v1/games/${roomId}/questions`);
            response = await response.json();
            for(var i = 0; i < response.questions.size; i++){
                dispatch(NewQuestionAction(response.questions[i].question, response.questions[i].questionNumber));
            }
        }
        catch(error)
        {
            console.log(error);
        }
    }
}