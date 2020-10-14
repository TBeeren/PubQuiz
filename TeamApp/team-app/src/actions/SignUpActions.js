export function signUpAction(teamName, roomId)
{
    return({
        type: "SIGN_UP_ACTION",
        payload: {
            teamName: teamName,
            roomId: roomId
        }
    });
}