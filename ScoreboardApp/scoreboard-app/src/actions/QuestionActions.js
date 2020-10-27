const applicationHost = "http://localhost:3010";

function NewQuestionAction(question, questionId, category, number)
{
    return {
        type: "NEW_QUESTION",
        payload: {
            question: question,
            questionId: questionId,
            category: category,
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
            dispatch(NewQuestionAction(response.question, questionId, response.category, response.questionNumber));
        }
        catch(error)
        {
            console.log(error);
        }
    }
}