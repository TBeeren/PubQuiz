const applicationHost = "http://localhost:3010";

export function ReceivedAnswerAction(teamAnswers){
    return {
        type: "RECEIVED_ANSWER",
        payload: teamAnswers
    }
}

function ApproveAnswerAction(teamName, correctness){
    return {
        type: "APPROVE_ANSWER",
        payload: {
            teamName: teamName,
            correctness: correctness
        }
    }
}

export function approveAnswer(roomId, teamName, questionId, correctness){
    return async function(dispatch)
    {
        try{
            let body = {
                questionId: questionId,
                correct: correctness
            }
            await fetch(`${applicationHost}/api/v1/games/${roomId}/teams/${teamName}/answer`,
                {
                  method: "Put",
                  body: JSON.stringify(body),
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              );
            dispatch(ApproveAnswerAction(teamName, correctness));
        }
        catch(error)
        {
            console.log(error);
        }
    }
}

function teamAnsweredAction(teams)
{
    teams = teams.map((team) => {
        return {
            teamName: team.teamName, 
            value: team.text, 
            correctness: team.isCorrect
        }
    })
    return {
        type: "SUBMITTED_ANSWER",
        payload: teams
    }
}

export function fetchTeamAnswers(roomId, questionId)
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