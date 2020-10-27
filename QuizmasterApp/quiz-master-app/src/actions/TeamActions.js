const applicationHost = "http://localhost:3010";

function teamInfoUpdate(teams)
{
    return(
        {
            type: "FETCH_TEAMS",
            payload: teams
        }
    )
}

export function fetchScores(roomId)
{
    return async function(dispatch)
    {
        try
        {
            let response = await fetch(`${applicationHost}/api/v1/games/${roomId}/teams`);
            response = await response.json();
            dispatch(teamInfoUpdate(response[0].teams));
        }
        catch(error)
        {
            console.log(error);
        }
    }
}