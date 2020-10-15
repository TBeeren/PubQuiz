const applicationHost = "http://localhost:3001";

export function ReceivedAnswerAction(teamAnswers){
    return {
        type: "RECEIVED_ANSWER",
        payload: teamAnswers
    }
}

export function ApproveAnswerAction(teamName, correctness){
    return {
        type: "APPROVE_ANSWER",
        payload: {
            teamName: teamName,
            correctness: correctness
        }
    }
}

export function NewCategoryAction(categories)
{
    return {
        type: "NEW_CATEGORIES",
        payload: {
            categories: categories,
        }
    }
}

export function fetchCategories(roomId)
{
    return async function(dispatch)
    {
        try
        {
            let response = await fetch(`${applicationHost}/api/v1/games/${roomId}/categories`);
            response = await response.json();
            dispatch(NewCategoryAction(response.categories));
        }
        catch(error)
        {
            console.log(error);
        }
    }
}