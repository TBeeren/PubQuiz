const applicationHost = "http://localhost:3001";

export function CreateQuizAction(quizInfo) {
    return {
        type: "CREATE_QUIZ",
        payload: {
            quizName: quizInfo.name,
            roomId: quizInfo.roomId
        }
    }
}

export function ReceivedNewTeamAction(teamNames){
    return {
        type: "RECEIVED_NEW_TEAM",
        payload: teamNames
    }
}

export function RemoveTeamAction(teamNames){
    return {
        type: "REMOVE_TEAM",
        payload: teamNames
    }
}

export function StartQuizAction(quizInfo){
    return{
        type: "START_QUIZ",
        payload: {
            isStarted: quizInfo.isStarted,
            roomId: quizInfo.roomId
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

export function createQuiz(name)
{
    return async function(dispatch)
    {
        try
        {
            let body = {
                name: name
            }
            let response = await fetch(`${applicationHost}/api/v1/games`, {
                method: "Post",
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            response = await response.json();
            dispatch(CreateQuizAction(response));
        }
        catch(error)
        {
            console.log(error);
        }
    }
}

export function startQuiz(roomId, isStarted)
{
    return async function(dispatch)
    {
        try
        {
            let body = {
                isStarted: isStarted,
                roomId: roomId
            }
            let response = await fetch(`${applicationHost}/api/v1/games/${roomId}`, {
                method: "Put",
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            response = await response.json();
            console.log(response);
            dispatch(StartQuizAction(response));
        }
        catch(error)
        {
            console.log(error);
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
            dispatch(NewCategoryAction(response));
        }
        catch(error)
        {
            console.log(error);
        }
    }
}