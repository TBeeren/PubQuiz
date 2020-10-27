const applicationHost = "http://localhost:3001";

export function incrementRoundScoreAction(value)
{
    return {
        type: "INCREMENT_ROUNDSCORE",
        payload: value
    }
}

export function resetRoundAction()
{
    return {
        type: "RESET_ROUND"
    }
}  

export function incrementScoreAction(value)
{
    return {
        type: "INCREMENT_SCORE",
        payload: value
    }
}  