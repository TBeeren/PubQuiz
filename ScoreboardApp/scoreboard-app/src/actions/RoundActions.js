const applicationHost = "http://localhost:3010";


function fetchRoundAction(roundNumber){
    return {
        type: "FETCH_ROUND",
        payload: roundNumber
    }
}

export function fetchRoundNumber(roomId)
{  
    return async function(dispatch)
    {
        try
        {
            let response = await fetch(`${applicationHost}/api/v1/games/${roomId}/round`);
            response = await response.json();
            dispatch(fetchRoundAction(response.roundNumber));
        }
        catch(error)
        {
            console.log(error);
        }
    }
}