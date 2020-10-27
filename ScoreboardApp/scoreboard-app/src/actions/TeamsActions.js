const applicationHost = "http://localhost:3010";

function teamInfoUpdate(teams)
{
    return(
        {
            type: "TEAMS_UPDATE",
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


function teamAnsweredAction(teams)
{
    return({
        type: "TEAM_ANSWERED",
        payload: teams
    })
}

export function fetchAnsweredTeams(roomId, questionId)
{
    return async function(dispatch)
    {
        try{
            let response = await fetch(`${applicationHost}/api/v1/games/${roomId}/questions/${questionId}/answers`);
            response = await response.json();
            dispatch(teamAnsweredAction(response.teams));
        }
        catch(error)
        {
            console.log(error);
        }
    }
}