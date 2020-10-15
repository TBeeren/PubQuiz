const applicationHost = "http://localhost:3001";

function signUpAction(teamName, roomId)
{
    return({
        type: "SIGN_UP_ACTION",
        payload: {
            teamName: teamName,
            roomId: roomId
        }
    });
}

export function signUp(teamName, roomId)
{
    return async function(dispatch)
    {
        try
        {
            let body = {
                name: teamName,
                language: "Nederlands"
            }
            await fetch(`${applicationHost}/api/v1/games/${roomId}/teams`, {
                method: "Post",
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            dispatch(signUpAction(teamName, roomId));
        }
        catch(error)
        {
            console.log(error);
        }
    }
}