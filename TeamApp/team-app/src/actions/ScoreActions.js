const applicationHost = "http://localhost:3001";

export function updateRoundScoreAction(value)
{
    return {
        type: "UPDATE_ROUNDSCORE",
        payload: value
    }
}

export function resetRoundAction()
{
    return {
        type: "RESET_ROUND"
    }
}  

export function updateScoreAction(value)
{
    return {
        type: "UPDATE_SCORE",
        payload: value
    }
}  

export function fetchScores(roomId, teamName)
{
    return async function(dispatch)
    {
        try
        {
            let response = await fetch(`${applicationHost}/api/v1/games/${roomId}/teams/${teamName}`);
            response = await response.json();
            dispatch(updateScoreAction(response.score));
            dispatch(updateRoundScoreAction(response.roundScore));
        }
        catch(error)
        {
            console.log(error);
        }
    }
}