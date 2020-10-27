import {openSocket} from '../websocket';

const applicationHost = "http://localhost:3010";

export function resetGameAction(){
    return({
        type: "RESET"
    })
}

export function invalidNameAlertAction(invalid)
{
    return({
        type: "INVALID_NAME",
        payload: invalid
    })
}

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

export function signUp(store, history, teamName, roomId)
{
    return async function(dispatch)
    {
        try
        {
            let body = {
                name: teamName
            }
            let response = await fetch(`${applicationHost}/api/v1/games/${roomId}/teams`, {
                method: "Post",
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (response.status === 409)
            {
                history.push("/");
                dispatch(invalidNameAlertAction(true));
            }
            else{
                dispatch(signUpAction(teamName, roomId));
                openSocket(store, history, teamName, roomId);
            }
        }
        catch(error)
        {
            console.log(error);
        }
    }
}