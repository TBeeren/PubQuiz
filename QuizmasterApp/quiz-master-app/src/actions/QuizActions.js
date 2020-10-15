export function CreateQuizAction(quizName, roomId) {
    return {
        type: "CREATE_QUIZ",
        payload: {
            quizName: quizName,
            roomId: roomId
        }
    }
}

export function ReceivedNewTeamAction(teamNames){
    return {
        type: "RECEIVED_NEW_TEAM",
        payload: teamNames
    }
}

export function RemoveTeamAction(teamNames){
    return {
        type: "REMOVE_TEAM",
        payload: teamNames
    }
}

export function StartQuizAnswer(isStarted){
    return{
        type: "START_QUIZ",
        payload: isStarted
    }
}