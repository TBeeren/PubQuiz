const applicationHost = "http://localhost:3001";

export function NewRoundAction(roundNumber, categories){
    return {
        type: "NEW_ROUND",
        payload: {
            roundNumber: roundNumber,
            categories: categories,
        }
    }
}  

export function newRound(roomId, roundNumber, categories){
    return async function(dispatch)
    {
        try
        {
            let body = {
                roundNumber: roundNumber,
                categories: categories,
            }
            let response = await fetch(`${applicationHost}/api/v1/games/${roomId}/round/categories`, {
                method: "Post",
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            response = await response.json();
            dispatch(NewRoundAction(response.roundNumber, response.categories));
        }
        catch(error)
        {
            console.log(error);
        }
    }
}